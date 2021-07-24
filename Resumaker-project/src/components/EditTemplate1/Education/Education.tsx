import React from "react";
import EducationCard from "./EducationCard";
import {
  Education as EducationInterface,
  Template,
} from "../../../modules/template/interfaces";
import { MdDeleteForever, MdAddCircleOutline } from "react-icons/md";

interface Props {
  template: Template;
  setTemplate: (template: Template) => void;
}

const Education = ({ template, setTemplate }: Props): JSX.Element => {
  const educations: EducationInterface[] = template.education!;
  const addEducation = () => {
    setTemplate({
      ...template,
      education: [
        ...educations,
        {
          school: "",
          degree: "",
          fieldOfStudy: "",
          fromDate: "",
          toDate: "",
          isCurrent: false,
          description: [""],
        },
      ],
    });
  };

  const deleteEducation = (index: number) => {
    setTemplate({
      ...template,
      education: educations.filter((_education, idx) => index !== idx),
    });
  };

  const onChange = (
    index: number,
    name:
      | "school"
      | "degree"
      | "fieldOfStudy"
      | "fromDate"
      | "toDate"
      | "isCurrent"
      | "description",
    value: string | boolean | null | undefined
  ): void => {
    const newEducations = [...educations];
    if (name === "description") {
      newEducations[index][name] = [value as string];
    } else if (name === "isCurrent") {
      newEducations[index][name] = value === false ? undefined : true;
      if (newEducations[index][name]) {
        newEducations[index]["toDate"] = "";
      }
    } else {
      newEducations[index][name] = value as string | undefined;
    }

    setTemplate({
      ...template,
      education: newEducations,
    });
  };

  const onDeleteBtnClick = () => {
    deleteEducation(educations.length - 1);
  };

  return (
    <>
      <section className="editTemplate1-education">
        <h1 className="editTemplate1-title">Education</h1>
        {educations.map((education, index) => (
          <EducationCard
            education={education}
            index={index}
            deleteEducation={deleteEducation}
            isLast={index === educations.length - 1}
            onInputChange={onChange}
          />
        ))}
        <MdDeleteForever
          className="education-delete-btn"
          onClick={onDeleteBtnClick}
        />
        <MdAddCircleOutline
          className="education-add-btn"
          onClick={addEducation}
        />
      </section>
    </>
  );
};

export default Education;
