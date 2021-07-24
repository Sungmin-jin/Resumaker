import React, { useState } from "react";
import { Project } from "modules/template/interfaces";
import { hasValues } from "util/helperFunctions";

interface Props {
  project: Project[] | undefined;
}

const Projects = ({ project }: Props) => {
  let projectContents: Project[] = project !== undefined ? project : [];
  const useTabs = (initialTab: number, allTab: Project[]) => {
    const [index, setIndex] = useState<number>(initialTab);
    return {
      contentItem: allTab[index],
      contentChange: setIndex,
    };
  };

  const projectObject = project![0];

  const { contentItem, contentChange } = useTabs(0, projectContents);

  return (
    <>
      {hasValues(projectObject) && (
        <section className="template1-project" id="project">
          <h1 className="template1-project-header"> Projects </h1>
          <div className="template1-tabs-container">
            {projectContents &&
              projectContents.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => contentChange(index)}
                  className="template1-tabs-btn"
                >
                  {tab.project}
                </button>
              ))}
          </div>
          <div className="template1-tabs-contents">
            <h2 className="template1-tabs-title">{contentItem.project}</h2>
            <div className="template1-tabs-image-description-container">
              <figure className="tabs-image-container">
                <img
                  src={contentItem.image!}
                  className="template1-tabs-image"
                />
              </figure>
              <p className="template1-tabs-description">
                {contentItem.description}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;
