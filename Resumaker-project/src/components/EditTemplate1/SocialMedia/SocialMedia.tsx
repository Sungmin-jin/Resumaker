import React from "react";
import {
  PersonalInfo as PersonalInfoInterface,
  Template,
} from "../../../modules/template/interfaces";

interface Props {
  template: Template;
  setTemplate: (template: Template) => void;
}
const SocialMedia = ({ template, setTemplate }: Props): JSX.Element => {
  const personalInfo: PersonalInfoInterface = template.personalInfo![0];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newPersonalInfo = { ...personalInfo, [name]: value };
    setTemplate({ ...template, personalInfo: [newPersonalInfo] });
  };

  return (
    <section className="editTemplate1-contact">
      <h1 className="editTemplate1-title">Contact</h1>
      <form className="editTemplate1-contact-form-container">
        <h3>Github</h3>
        <input
          type="text"
          name="github"
          className="editTemplate1-form-input"
          value={personalInfo.github}
          onChange={(e) => handleChange(e)}
        />
        <h3>Linked In</h3>
        <input
          type="text"
          name="linkedin"
          className="editTemplate1-form-input"
          onChange={(e) => handleChange(e)}
          value={personalInfo.linkedin}
        />
        <h3>Facebook</h3>
        <input
          type="text"
          name="facebook"
          className="editTemplate1-form-input"
          onChange={(e) => handleChange(e)}
          value={personalInfo.facebook}
        />
        <h3>Instagram</h3>
        <input
          type="text"
          name="instagram"
          className="editTemplate1-form-input"
          onChange={(e) => handleChange(e)}
          value={personalInfo.instagram}
        />
      </form>
    </section>
  );
};

export default SocialMedia;
