import api from "../../util/api";
import { deleteFile, uploadFile } from "react-s3";
import { Template } from "./interfaces";
import { store } from "../../store";
import { v4 as uuidv4 } from "uuid";

interface S3Config {
  bucketName: string | null;
  region: string | null;
  accessKeyId: string | null;
  secretAccessKey: string | null;
}

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const uploadTemplateRequest = async (template: Template) => {
  trimTemplate(template);
  await uploadFiles(template);
  return api.post("/template", template, config);
};

export const deleteTemplateRequest = (template: Template) => {
  deleteFiles(template);
  return api.delete(`/template/${template._id}`);
};

export const editTemplateRequest = (template: Template) => {
  return api.put("/template", template, config);
};

export const fetchTemplateRequest = (id: string) => {
  return api.get(`/template/${id}`);
};

const uploadImageS3 = async (file: File, config: S3Config) => {
  return uploadFile(file, config);
};

const deleteImageS3 = async (fileName: string, config: S3Config) => {
  return deleteFile(fileName, config);
};

//get trimmed template
async function uploadFiles(template: Template) {
  const apiKeys = await store.getState().api;
  const awsConfig = {
    bucketName: apiKeys.aws_bucket_name,
    region: apiKeys.aws_bucket_region,
    accessKeyId: apiKeys.aws_access_key,
    secretAccessKey: apiKeys.aws_secret_key,
  };

  for (const section in template) {
    if (Array.isArray(template[section])) {
      for (const item of template[section]) {
        if (item.file) {
          const newFile = renameFile(item.file);
          const res = await uploadImageS3(newFile, awsConfig);
          delete item.file;
          item.image = res.location;
        }
      }
    }
  }
}

async function deleteFiles(template: Template) {
  const apiKeys = await store.getState().api;

  const awsConfig = {
    bucketName: apiKeys.aws_bucket_name,
    region: apiKeys.aws_bucket_region,
    accessKeyId: apiKeys.aws_access_key,
    secretAccessKey: apiKeys.aws_secret_key,
  };

  for (const section in template) {
    if (Array.isArray(template[section])) {
      for (const item of template[section]) {
        if (item.image) {
          const fileUrl = item.image.split("/");
          const fileName = fileUrl[fileUrl.length - 1];
          const res = await deleteImageS3(fileName, awsConfig);
        }
      }
    }
  }
}

export function trimTemplate(template: Template) {
  //education, experience...
  for (const section in template) {
    if (Array.isArray(template[section])) {
      //element
      for (const item of template[section]) {
        for (const variable in item) {
          if (Array.isArray(item[variable])) {
            item[variable] = item[variable].filter(
              (desc: string) => desc !== ""
            );
            if (item[variable].length === 0) {
              delete item[variable];
            }
          } //
          else if (
            item[variable] === "" ||
            item[variable] === null ||
            item[variable] === undefined
          ) {
            delete item[variable];
          }
        }
        if ("{}" === JSON.stringify(item)) {
          template[section].shift();
        }
      }
      if (template[section].length === 0) {
        delete template[section];
      }
    }
  }
}

function renameFile(originalFile: File) {
  return new File([originalFile], uuidv4(), {
    type: originalFile.type,
    lastModified: originalFile.lastModified,
  });
}
