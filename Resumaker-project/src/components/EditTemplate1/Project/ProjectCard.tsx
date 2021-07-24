import React, { useRef } from "react";
import { Project as ProjectInterface } from "../../../modules/template/interfaces";
import { MdDeleteForever, MdCancel, MdAddToPhotos } from "react-icons/md";

interface Props {
  index: number;
  deleteProject: (index: number) => void;
  isLast: boolean;
  project: ProjectInterface;
  onInputChange: (
    index: number,
    name: "project" | "description" | "image" | "file",
    value: string | File | undefined
  ) => void;
}

const ProjectCard = ({
  index,
  deleteProject,
  isLast,
  project,
  onInputChange,
}: Props): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const onDeleteBtnClick = () => {
    deleteProject(index);
  };

  const onTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onInputChange(index, "project", e.currentTarget.value);
  };

  const onDescriptionChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    onInputChange(index, "description", e.currentTarget.value);
  };

  const onFileInputClick = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        onInputChange(index, "image", result);
        onInputChange(index, "file", file);
      };
      reader.readAsDataURL(file);
    }
  };

  const onImageCancleClick = () => {
    onInputChange(index, "image", undefined);
    onInputChange(index, "file", undefined);
  };

  return (
    <>
      <section className="project">
        <form className="project-form">
          <div className="project-image-container">
            {project && project.image ? (
              <>
                <MdCancel className="image-cancle-btn" onClick={onImageCancleClick} />
                <img src={project.image} className="project-image" />
              </>
            ) : (
              <>
                <button className="project-input-btn" onClick={onFileInputClick}>
                  <MdAddToPhotos className="image-add-button" />
                  <span>Click or drag file to this area to upload</span>
                </button>

                <input
                  type="file"
                  name="projectImg"
                  className="project-input-file"
                  ref={fileInputRef}
                  onChange={onFileChange}
                />
              </>
            )}
          </div>

          <h3 className="project-form-title">Project name</h3>
          <input
            type="text"
            className="project-title-input"
            name="project"
            value={project.project!}
            onChange={onTitleChange}
          />

          <h3 className="project-form-description">Description</h3>
          <textarea
            name="description"
            className="project-description-textarea"
            value={project.description[0]}
            onChange={onDescriptionChange}
          />
        </form>
      </section>
      {!isLast && <MdDeleteForever className="project-delete-btn" onClick={onDeleteBtnClick} />}
    </>
  );
};

export default ProjectCard;
