import React from "react";
import { PersonalInfo } from "modules/template/interfaces";
import { hasValues } from "util/helperFunctions";

interface Props {
  personalInfo: PersonalInfo | undefined;
}

const About = ({ personalInfo }: Props) => {
  return (
    <>
      {hasValues(personalInfo) && (
        <section className="template1-about" id="about">
          <div className="template1-about-header">
            <h1 className="about-header">about</h1>
          </div>
          <figure className="template1-about-picture">
            <img
              className="about-picture"
              src={personalInfo!.image!}
              alt="aboutPicture"
            />
          </figure>
          <div className="template1-about-info">
            <h2 className="template1-about-info-title">
              {personalInfo!.title}
            </h2>
            <p className="template1-about-info-description">
              {personalInfo!.about}
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default About;
