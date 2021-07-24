import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Template } from "modules/template/interfaces";
import { RootReducerType } from "../../modules";
import Intro from "./Intro";
import NavMenus from "./NavMenus";
import About from "./About";
import Projects from "./Projects";
import Contact from "./PreviewContact";
import SocialMedia from "./SocialMedia";
import ButtonSection from "./ButtonSection";
import Experiences from "./Experiences";
import Educations from "./Educations";
import AdditionalInfo from "./AdditionalInfos";

import { sampleInitialState as Sample } from "components/EditTemplate1/initialState";

const PreviewTemplate1 = () => {
  const location = useLocation();

  const { isAuthenticated } = useSelector(
    (state: RootReducerType) => state.auth
  );
  const template: Template = useSelector(
    (state: RootReducerType) => state.template
  );
  const templateData: Template =
    location.pathname === "/template-list/1" ? Sample : template;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isAuthenticated) {
      localStorage.setItem("tempLocation", location.pathname);
    }
  }, []);

  return (
    <>
      <Intro personalInfo={templateData.personalInfo[0]} />
      <NavMenus />
      <About personalInfo={templateData.personalInfo[0]} />
      <Projects project={templateData.project} />
      <Experiences experience={templateData.experience} />
      <Educations education={templateData.education} />
      <AdditionalInfo additionalInfo={templateData.additionalInfo} />
      {templateData.personalInfo &&
      templateData.personalInfo[0] &&
      templateData.personalInfo[0].email ? (
        <Contact email={templateData.personalInfo[0].email} />
      ) : (
        <></>
      )}
      <SocialMedia personalInfo={templateData.personalInfo} />
      <ButtonSection />
    </>
  );
};

export default PreviewTemplate1;
