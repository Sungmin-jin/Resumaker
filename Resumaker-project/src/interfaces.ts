interface User {
  firstName: string;
  lastName: string;
  myTemplateList: Template[];
}

interface Template {
  templateId: string;
  templateName: string;
  myTemplateName?: string;
  thumbnailImages?: string[];
  singleThumbnail?: string[] | string;
}

interface AllTemplateData {
  data: Template[];
  available: boolean;
}

export { User, Template, AllTemplateData };
