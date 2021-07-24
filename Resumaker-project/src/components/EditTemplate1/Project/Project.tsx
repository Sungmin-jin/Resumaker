import React from "react";
import ProjectCard from "./ProjectCard";
import { Project as ProjectInterface, Template } from "../../../modules/template/interfaces";
import { MdDeleteForever, MdAddCircleOutline } from "react-icons/md";

interface Props {
  template: Template;
  setTemplate: (template: Template) => void;
}

const Project = ({ template, setTemplate }: Props): JSX.Element => {
  const projects: ProjectInterface[] = template.project;

  const addProject = () => {
    setTemplate({
      ...template,
      project: [...projects, { project: "", description: [""], file: undefined, image: undefined }],
    });
  };

  const deleteProject = (index: number) => {
    setTemplate({
      ...template,
      project: projects.filter((_project, idx) => index !== idx),
    });
  };

  const onChange = (
    index: number,
    name: "project" | "description" | "image" | "file",
    value: string | File | undefined
  ): void => {
    const newProjects = [...projects];
    if (name === "description") {
      newProjects[index][name] = [value as string];
    } else {
      newProjects[index][name] = value as (string & File) | undefined;
    }
    setTemplate({
      ...template,
      project: newProjects,
    });
  };

  const onDeleteBtnClick = () => {
    deleteProject(projects.length - 1);
  };

  return (
    <>
      <section className="editTemplate1-project">
        <h1 className="editTemplate1-title">Project</h1>
        {projects.map((project: ProjectInterface, index: number) => (
          <ProjectCard
            project={project}
            index={index}
            deleteProject={deleteProject}
            isLast={index === projects.length - 1}
            onInputChange={onChange}
          />
        ))}
        <MdDeleteForever className="project-delete-btn" onClick={onDeleteBtnClick} />
        <MdAddCircleOutline className="project-add-btn" onClick={addProject} />
      </section>
    </>
  );
};

export default Project;
