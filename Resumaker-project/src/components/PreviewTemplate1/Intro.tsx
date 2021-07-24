import React from "react";
import { Link } from "react-scroll";
import { PersonalInfo } from "modules/template/interfaces";

const Intro = ({ personalInfo }: PersonalInfo) => {
  return (
    <header className="template1-header">
      <div className="template1-header-texts">
        {personalInfo && <h1>{personalInfo.headerText}</h1>}
      </div>
      <div className="template1-header-button">
        <button className="header-button">
          <Link smooth={true} to="about">
            View my Info
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Intro;
