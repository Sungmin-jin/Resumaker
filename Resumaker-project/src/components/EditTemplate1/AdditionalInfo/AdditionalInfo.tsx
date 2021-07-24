import React, { useState, useRef } from "react";
import {
  AdditionalInfo as AdditionalInfoInterface,
  Template,
} from "../../../modules/template/interfaces";

interface Props {
  template: Template;
  setTemplate: (template: Template) => void;
}

const AdditionalInfo = ({ template, setTemplate }: Props): JSX.Element => {
  const additionalInfo: AdditionalInfoInterface = template.additionalInfo![0];
  const btnRef = useRef<null | HTMLButtonElement>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTemplate({
      ...template,
      additionalInfo: [{ ...additionalInfo, description: [e.target.value] }],
    });
  };

  const showAdditionalInfo = () => {
    setShowForm(!showForm);
  };

  return (
    <section className="editTemplate1-additional">
      <button
        className="additional-info-button"
        onClick={showAdditionalInfo}
        ref={btnRef}
      >
        Click to add additional information
      </button>
      {showForm && (
        <textarea
          placeholder="Enter text..."
          name="description"
          value={additionalInfo!.description![0]}
          onChange={(e) => handleChange(e)}
          className="additional-info-textarea"
        />
      )}
    </section>
  );
};

export default AdditionalInfo;
