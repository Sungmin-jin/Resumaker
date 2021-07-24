import React from "react";

import { Education as EducationInterface } from "../../../modules/template/interfaces";
import { MdDeleteForever } from "react-icons/md";
import CustomCheckbox from "components/CommonComponent/CustomCheckbox";

type degreeType = "Diploma" | "Bachelor" | "Master" | "Ph.D";
const degreeList: degreeType[] = ["Diploma", "Bachelor", "Master", "Ph.D"];

interface Props {
  index: number;
  deleteEducation: (index: number) => void;
  isLast: boolean;
  education: EducationInterface;
  onInputChange: (
    index: number,
    name:
      | "school"
      | "degree"
      | "fieldOfStudy"
      | "fromDate"
      | "toDate"
      | "isCurrent"
      | "description",
    value: string | boolean | null | undefined
  ) => void;
}

const EducationCard = ({
  index,
  deleteEducation,
  isLast,
  education,
  onInputChange,
}: Props): JSX.Element => {
  const onDeleteBtnClick = () => {
    deleteEducation(index);
  };

  const onSchoolChange = (e: React.FormEvent<HTMLInputElement>) => {
    onInputChange(index, "school", e.currentTarget.value);
  };

  const onDegreeChange = (e: React.FormEvent<HTMLSelectElement>) => {
    onInputChange(index, "degree", e.currentTarget.value);
  };

  const onFieldOfStudyChange = (e: React.FormEvent<HTMLInputElement>) => {
    onInputChange(index, "fieldOfStudy", e.currentTarget.value);
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
      <section className="education">
        <form className="education-form">
          <h3 className="education-form-title">School</h3>
          <input
            type="text"
            className="education-form-text-input"
            name="school"
            value={education.school!}
            onChange={onSchoolChange}
          />

          <h3 className="education-form-title">Degree</h3>
          <select
            name="degree"
            value={education.degree!}
            onChange={onDegreeChange}
            className="education-form-select"
          >
            <option className="education-form-select-option">Select...</option>
            {degreeList.map((degree, index) => (
              <option
                className="education-form-select-option"
                key={index}
                value={degree}
              >
                {degree}
              </option>
            ))}
          </select>

          <h3 className="education-form-title">Field of Study</h3>
          <input
            type="text"
            className="education-form-text-input"
            name="fieldOfStudy"
            value={education.fieldOfStudy!}
            onChange={onFieldOfStudyChange}
          />

          <h3 className="education-form-title">From</h3>
          <input
            type="date"
            className="education-form-text-input"
            name="fromDate"
            value={education.fromDate!}
            onChange={onFromDateChange}
          />

          <div className="education-form-isCurrent-container">
            <label>
              <CustomCheckbox
                name="isCurrent"
                checked={education.isCurrent!}
                onChange={onIsCurrentChange}
              />
              <span className="education-form-label-checkbox">Is Current</span>
            </label>
          </div>

          {!education.isCurrent && (
            <>
              <h3 className="education-form-title">To</h3>
              <input
                type="date"
                className="education-form-text-input"
                name="toDate"
                value={education.toDate!}
                onChange={onToDateChange}
              />
            </>
          )}

          <h3 className="education-form-title">Description</h3>
          <textarea
            name="description"
            className="education-form-textarea"
            value={education.description![0]!}
            onChange={onDescriptionChange}
          />
        </form>
      </section>
      {!isLast ? (
        <>
          <MdDeleteForever
            className="education-delete-btn"
            onClick={onDeleteBtnClick}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default EducationCard;
