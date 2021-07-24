import React from "react";
import { Template } from "../../../modules/template/interfaces";

interface Props {
  template: Template;
  setTemplate: (template: Template) => void;
}

const Header = ({ template, setTemplate }: Props): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTemplate({
      ...template,
      personalInfo: [{ ...template.personalInfo[0], headerText: e.target.value }],
    });
  };

  return (
    <section className="editTemplate1-header">
      <textarea
        className="editTemplate1-textarea"
        name="about"
        value={template.personalInfo[0]?.headerText}
        onChange={(e) => handleChange(e)}
      />
    </section>
  );
};

export default Header;
