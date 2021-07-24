import { AllTemplateData } from "interfaces";

export const LOAD_ALL_TEMPLATE_LOADING =
  "allTemplate/LOAD_ALL_TEMPLATE_LOADING" as const;
export const LOAD_ALL_TEMPLATE_SUCCESS =
  "allTemplate/LOAD_ALL_TEMPLATE_SUCCESS" as const;
export const INCREASE_TEMPLATE_INDEX =
  "allTemplate/INCREASE_TEMPLATE_INDEX" as const;

export const loadAllTemplates = () => ({
  type: LOAD_ALL_TEMPLATE_LOADING,
});

export const loadAllTemplatesSuccess = (data: AllTemplateData) => ({
  type: LOAD_ALL_TEMPLATE_SUCCESS,
  payload: data,
});

export const increaseTemplateIndex = () => ({
  type: INCREASE_TEMPLATE_INDEX,
});

export type loadAllTemplatesType =
  | ReturnType<typeof loadAllTemplates>
  | ReturnType<typeof loadAllTemplatesSuccess>
  | ReturnType<typeof increaseTemplateIndex>;
