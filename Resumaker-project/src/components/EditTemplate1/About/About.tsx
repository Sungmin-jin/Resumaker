import React, { useRef } from "react";
import { MdCancel, MdAddToPhotos } from "react-icons/md";
import {
  PersonalInfo as PersonalInfoInterface,
  Template,
} from "../../../modules/template/interfaces";

interface Props {
  template: Template;
  setTemplate: (template: Template) => void;
}

const About = ({ template, setTemplate }: Props): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const personalInfo: PersonalInfoInterface = template.personalInfo[0];
  const onFileInputClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTemplate({
      ...template,
      personalInfo: [{ ...personalInfo, [name]: value }],
    });
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setTemplate({
          ...template,
          personalInfo: [{ ...personalInfo, file, image: result }],
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const onImageCancelClick = () => {
    setTemplate({
      ...template,
      personalInfo: [{ ...personalInfo, file: undefined, image: null }],
    });
  };
  return (
    <section className="editTemplate1-about">
      <h1 className="editTemplate1-title">About</h1>
      <section className="about">
        <form className="about-form">
          <div className="about-image-container">
            {personalInfo?.image ? (
              <>
                <MdCancel className="image-cancle-btn" onClick={onImageCancelClick} />
                <img src={personalInfo.image} className="about-image" />
              </>
            ) : (
              <>
                <button onClick={onFileInputClick} className="about-input-btn">
                  <MdAddToPhotos className="image-add-button" />
                  <span>Click or drag file to this area to upload</span>
                </button>
                <input
                  name="file"
                  type="file"
                  className="about-input-file"
                  ref={fileInputRef}
                  onChange={onFileChange}
                />
              </>
            )}
          </div>

          <h3 className="about-form-title">First Name</h3>
          <input
            type="text"
            className="about-title-input"
            name="firstName"
            value={personalInfo?.firstName}
            onChange={handleChange}
          />

          <h3 className="about-form-title">Last Name</h3>
          <input
            type="text"
            className="about-title-input"
            name="lastName"
            value={personalInfo?.lastName}
            onChange={handleChange}
          />

          <h3 className="about-form-title">Email</h3>
          <input
            type="text"
            className="about-title-input"
            name="email"
            value={personalInfo?.email}
            onChange={handleChange}
          />

          <h3 className="about-form-title">Title</h3>
          <input
            type="text"
            className="about-title-input"
            name="title"
            value={personalInfo?.title}
            onChange={handleChange}
          />
          <h3 className="about-form-description">Describe yourself</h3>
          <textarea
            rows={3}
            className="about-description-textarea"
            name="about"
            onChange={handleChange}
            value={personalInfo?.about}
          />
        </form>
      </section>
    </section>
  );
};

export default About;
