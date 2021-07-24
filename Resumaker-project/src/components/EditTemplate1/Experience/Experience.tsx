import React from "react";
import { MdDeleteForever, MdAddCircleOutline } from "react-icons/md";
import ExperienceCard from "./ExperienceCard";
import {
  Experience as ExperienceInterface,
  Template,
} from "../../../modules/template/interfaces";

interface Props {
  template: Template;
  setTemplate: (template: Template) => void;
}

const Experience = ({ template, setTemplate }: Props): JSX.Element => {
  const experiences: ExperienceInterface[] = template.experience!;

  const addExperience = () => {
    setTemplate({
      ...template,
      experience: [
        ...experiences,
        {
          company: "",
          position: "",
          fromDate: "",
          toDate: "",
          isCurrent: false,
          description: [""],
        },
      ],
    });
  };

  const deleteExperience = (index: number) => {
    setTemplate({
      ...template,
      experience: experiences.filter((_experience, idx) => index !== idx),
    });
  };

  const onChange = (
    index: number,
    name:
      | "company"
      | "position"
      | "fromDate"
      | "toDate"
      | "isCurrent"
      | "description",
    value: string | boolean | null | undefined
  ): void => {
    const newExperiences = [...experiences];
    if (name === "description") {
      newExperiences[index][name] = [value as string];
    } else if (name === "isCurrent") {
      newExperiences[index][name] = value === false ? undefined : true;
      if (newExperiences[index][name]) {
        newExperiences[index]["toDate"] = "";
      }
    } else {
      newExperiences[index][name] = value as string | undefined;
    }

    setTemplate({
      ...template,
      experience: newExperiences,
    });
  };

  const onDeleteBtnClick = () => {
    deleteExperience(experiences.length - 1);
  };

  return (
    <>
      <section className="editTemplate1-experience">
        <h1 className="editTemplate1-title">Experience</h1>
        {experiences.map((experience, index) => (
          <ExperienceCard
            experience={experience}
            index={index}
            deleteExperience={deleteExperience}
            isLast={index === experiences.length - 1}
            onInputChange={onChange}
          />
        ))}
        <MdDeleteForever
          className="experience-delete-btn"
          onClick={onDeleteBtnClick}
        />
        <MdAddCircleOutline
          className="experience-add-btn"
          onClick={addExperience}
        />
      </section>
    </>
  );
};

export default Experience;
