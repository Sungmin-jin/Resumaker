import React from "react";
import { Experience } from "modules/template/interfaces";
import { hasValues } from "util/helperFunctions";

interface Props {
  experience: Experience[] | undefined;
}

const Experiences = ({ experience }: Props) => {
  const experienceContents: JSX.Element[] = experience!.map((expItem) => {
    const { company, position, fromDate, toDate, isCurrent, description } =
      expItem;
    return (
      <div className="template1-work-exp-contents">
        <h3>{`${fromDate} ~ ${isCurrent ? "present" : toDate}`}</h3>
        <h2>Company: {company}</h2>
        <h3>Position: {position}</h3>
        <p>{description}</p>
      </div>
    );
  });

  const experienceObject = experience![0];

  return (
    <>
      {hasValues(experienceObject) && (
        <section className="template1-work-exp" id="experience">
          <h1 className="template1-work-exp-header">Work Experience</h1>
          <div className="template1-work-exp-flex-box">
            {experienceContents}
          </div>
        </section>
      )}
    </>
  );
};

export default Experiences;
