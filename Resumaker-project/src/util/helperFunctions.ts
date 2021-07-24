import {
  AdditionalInfo,
  Education,
  Experience,
  PersonalInfo,
  Project,
  Skill,
} from "modules/template/interfaces";

export const hasValues = (
  inputs:
    | AdditionalInfo
    | Education
    | Experience
    | PersonalInfo
    | Project
    | Skill
) => {
  let hasValue = false;
  for (const key in inputs) {
    if (Array.isArray(inputs[key]) && inputs[key][0] === "") {
      hasValue = false;
    } else {
      if (
        inputs[key] !== "" &&
        inputs[key] !== null &&
        inputs[key] !== undefined
      ) {
        hasValue = true;
        return hasValue;
      }
    }
  }
  return hasValue;
};
