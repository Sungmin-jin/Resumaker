import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import { RootReducerType } from "modules";
import { Template } from "modules/template/interfaces";
import Template1Nav from "components/CommonComponent/Template1Nav";

const NavMenus = () => {
  const { personalInfo, project, experience, education, additionalInfo }: Template = useSelector(
    (state: RootReducerType) => state.template
  );

  const location = useLocation();

  const { title, about, image, github, linkedin, instagram, facebook } = personalInfo![0];

  const aboutData = { title, about, image };
  const contactData = { github, linkedin, instagram, facebook };

  const checkValidation = (menu: any, title: string): any => {
    for (const [key, value] of Object.entries(menu)) {
      if (value !== "" && value !== undefined && value !== null) {
        if (key === "description" && value[0].length === 0) {
        } else {
          return (
            <Link smooth={true} to={title} className="template1-nav-li">
              {title}
            </Link>
          );
        }
      }
    }
  };

  return (
    <section className="template1-nav">
      {location.pathname === "/template-list/1" ? (
        <ul className="template1-nav-ul">
          <Template1Nav />
        </ul>
      ) : (
        <ul className="template1-nav-ul">
          {checkValidation(aboutData, "about")}
          {checkValidation(project![0], "project")}
          {checkValidation(experience![0], "experience")}
          {checkValidation(education![0], "education")}
          {checkValidation(additionalInfo![0], "additionalInfo")}
          {checkValidation(contactData, "contact")}
        </ul>
      )}
    </section>
  );
};

export default NavMenus;
