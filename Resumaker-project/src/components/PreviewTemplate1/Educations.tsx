import React from "react";
import { Education } from "modules/template/interfaces";
import { hasValues } from "util/helperFunctions";

interface Props {
  education: Education[] | undefined;
}

const Educations = ({ education }: Props) => {
  const educationContents: JSX.Element[] = education!.map((eduItem) => {
    const {
      school,
      degree,
      fromDate,
      toDate,
      isCurrent,
      description,
      fieldOfStudy,
    } = eduItem;
    return (
      <div className="template1-education-contents">
        <h3>School: {school}</h3>
        <h3>{`${fromDate} ~ ${isCurrent ? "present" : toDate}`}</h3>
        <h2>Field of Study: {fieldOfStudy}</h2>
        <h3>Degree: {degree}</h3>
        <p>{description} </p>
      </div>
    );
  });

  const educationObject = education![0];

  return (
    <>
      {hasValues(educationObject) && (
        <section className="template1-education" id="education">
          <h1 className="template1-education-header">Education</h1>
          <div className="template1-education-flex-box">
            {educationContents}
          </div>
        </section>
      )}
    </>
  );
};

export default Educations;
