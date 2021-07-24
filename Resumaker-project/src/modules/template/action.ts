export const SETTEMPLATE = "template/SETTEMPLATE" as const;
export const ADDTEMPLATE = "template/ADDTEMPLATE" as const;
export const CLEARTEMPLATE = "template/CLEARTEMPLATE" as const;
export const UPLOADTEMPLATE = "template/UPLAODTEMPLATE" as const;
export const UPLOADTEMPLATESUCCESS = "template/UPLOADTEMPLATESUCCESS" as const;
export const FETCHTEMPLATE = "template/FETCHTEMPLATE" as const;
export const FETCHTEMPLATESUCCESS = "template/FETCHTEMPLATESUCCESS" as const;
export const DELETETEMPLATE = "template/DELETETEMPLATE" as const;
export const EDITTEMPLATE = "template/EDITTEMPLATE" as const;
export const EDITTEMPLATESUCCESS = "template/EDITETEMPLATESUCCESS" as const;

import { Template } from "./interfaces";

export const setTemplate = (sampleTemplate: Template) => ({
  type: SETTEMPLATE,
  payload: sampleTemplate,
});

export const addTemplate = (template: Template) => ({
  type: ADDTEMPLATE,
  payload: template,
});

export const clearTemplate = () => ({
  type: CLEARTEMPLATE,
});

export const getTemplate = (id: string) => ({
  type: FETCHTEMPLATE,
  payload: id,
});

export const getTemplateSuccess = (template: Template) => ({
  type: FETCHTEMPLATESUCCESS,
  payload: template,
});

export const uploadTemplate = (template: Template) => ({
  type: UPLOADTEMPLATE,
  payload: template,
});

export const uploadTempalteSuccess = () => ({
  type: UPLOADTEMPLATESUCCESS,
});

export const editTemplate = (template: Template) => ({
  type: EDITTEMPLATE,
  payload: template,
});

export const editTemplateSuccess = () => ({
  type: EDITTEMPLATESUCCESS,
});

export const deleteTemplate = (id: string) => ({
  type: DELETETEMPLATE,
  payload: id,
});

export type templateActionType =
  | ReturnType<typeof setTemplate>
  | ReturnType<typeof addTemplate>
  | ReturnType<typeof clearTemplate>
  | ReturnType<typeof getTemplateSuccess>
  | ReturnType<typeof uploadTempalteSuccess>
  | ReturnType<typeof editTemplateSuccess>;
