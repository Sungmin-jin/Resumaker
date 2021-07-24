import { Template } from "./interfaces";
import {
  templateActionType,
  SETTEMPLATE,
  ADDTEMPLATE,
  CLEARTEMPLATE,
  FETCHTEMPLATESUCCESS,
  EDITTEMPLATESUCCESS,
  UPLOADTEMPLATESUCCESS,
} from "./action";

const initialState: Template = {
  name: null,
  additionalInfo: [],
  education: [],
  experience: [],
  personalInfo: [],
  project: [],
  skill: [],
};

const templateReducer = (
  state: Template = initialState,
  action: templateActionType
): Template => {
  const { type, payload } = action;
  switch (type) {
    case SETTEMPLATE:
    case ADDTEMPLATE:
    case FETCHTEMPLATESUCCESS:
      return payload;
    case CLEARTEMPLATE:
    case UPLOADTEMPLATESUCCESS:
    case EDITTEMPLATESUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default templateReducer;
