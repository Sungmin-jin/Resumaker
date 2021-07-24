import React from "react";

import { Experience as ExperienceInterface } from "../../../modules/template/interfaces";
import { MdDeleteForever } from "react-icons/md";
import CustomCheckbox from "components/CommonComponent/CustomCheckbox";

interface Props {
  index: number;
  deleteExperience: (index: number) => void;
  isLast: boolean;
  experience: ExperienceInterface;
  onInputChange: (
    index: number,
    name:
      | "company"
      | "position"
      | "fromDate"
      | "toDate"
      | "isCurrent"
      | "description",
    value: string | boolean | null | undefined
  ) => void;
}

const ExperienceCard = ({
  index,
  deleteExperience,
  isLast,
  experience,
  onInputChange,
}: Props): JSX.Element => {
  const onDeleteBtnClick = () => {
    deleteExperience(index);
  };

  const onCompanyChange = (e: React.FormEvent<HTMLInputElement>) => {
    onInputChange(index, "company", e.currentTarget.value);
  };

  const onPositionChange = (e: React.FormEvent<HTMLInputElement>) => {
    onInputChange(index, "position", e.currentTarget.value);
  };

  const onFromDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    onInputChange(index, "fromDate", e.currentTarget.value);
  };

  const onIsCurrentChange = (e: React.FormEvent<HTMLInputElement>) => {
    onInputChange(index, "isCurrent", e.currentTarget.checked);
  };

  const onToDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    onInputChange(index, "toDate", e.currentTarget.value);
  };

  const onDescriptionChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    onInputChange(index, "description", e.currentTarget.value);
  };

  return (
    <>
      {experience && (
        <>
          <section className="experience">
            <form className="experience-form">
              <h3 className="experience-form-title">Company</h3>
              <input
                type="text"
                className="experience-form-text-input"
                name="company"
                value={experience.company!}
                onChange={onCompanyChange}
              />

              <h3 className="experience-form-title">Position</h3>
              <input
                type="text"
                className="experience-form-text-input"
                name="position"
                value={experience.position!}
                onChange={onPositionChange}
              />

              <h3 className="experience-form-title">From</h3>
              <input
                type="date"
                className="experience-form-text-input"
                name="fromDate"
                value={experience.fromDate!}
                onChange={onFromDateChange}
              />

              <div className="experience-form-isCurrent-container">
                <label>
                  <CustomCheckbox
                    name="isCurrent"
                    checked={experience.isCurrent!}
                    onChange={onIsCurrentChange}
                  />
                  <span className="experience-form-label-checkbox">
                    Is Current
                  </span>
                </label>
              </div>

              {!experience.isCurrent && (
                <>
                  <h3 className="experience-form-title">To</h3>
                  <input
                    type="date"
                    className="experience-form-text-input"
                    name="toDate"
                    value={experience.toDate!}
                    onChange={onToDateChange}
                  />
                </>
              )}

              <h3 className="experience-form-title">Description</h3>
              <textarea
                name="description"
                className="experience-form-textarea"
                value={experience.description![0]}
                onChange={onDescriptionChange}
              />
            </form>
          </section>
          {!isLast && (
            <MdDeleteForever
              className="experience-delete-btn"
              onClick={onDeleteBtnClick}
            />
          )}
        </>
      )}
    </>
  );
};

export default ExperienceCard;
