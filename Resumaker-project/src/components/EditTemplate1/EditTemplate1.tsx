import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { RootReducerType } from "modules";
import About from "./About/About";
import Project from "./Project/Project";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import SocialMedia from "./SocialMedia/SocialMedia";
import Header from "./Header/Header";
import ThemeButton from "components/CommonComponent/ThemeButton";
import { Template } from "../../modules/template/interfaces";
import { addTemplate } from "modules/template/action";

const EditTemplate1 = (): JSX.Element => {
  const dispatch = useDispatch();

  const template: Template = useSelector(
    (state: RootReducerType) => state.template
  );

  const [templateStates, setTemplateStates] = useState<Template>(template);

  const onClickPreview = () => {
    dispatch(addTemplate(templateStates));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="editTemplate1">
      <Header template={templateStates} setTemplate={setTemplateStates} />
      <div className="editTemplate1-navbar">Auto completed menu</div>
      <About template={templateStates} setTemplate={setTemplateStates} />
      <Project template={templateStates} setTemplate={setTemplateStates} />
      <Experience template={templateStates} setTemplate={setTemplateStates} />
      <Education template={templateStates} setTemplate={setTemplateStates} />
      <AdditionalInfo
        template={templateStates}
        setTemplate={setTemplateStates}
      />
      <SocialMedia template={templateStates} setTemplate={setTemplateStates} />
      <ThemeButton
        className="editTemplate1-preview-btn"
        to="/template-list/1/preview"
        onClick={onClickPreview}
      >
        Preview
      </ThemeButton>
    </section>
  );
};

export default EditTemplate1;
