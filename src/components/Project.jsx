import React from "react";
import { ProjectsGrid, ProjectCard, IconGrid } from "../styledComponents";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithubAlt } from "react-icons/fa";

const Project = (props) => {
  const { project, prj_title, image, prj_url, prj_github, tech_stck } = props;
  return (
    <ProjectCard>
      {prj_title && image ? (
        <>
          <a href={prj_url ? prj_url : prj_github}>
            <img src={image} alt={prj_title} />
          </a>
          <h3>{prj_title}</h3>
          <p>{tech_stck}</p>
        </>
      ) : (
        <>
          <a href={project.url ? project.url : project.github}>
            <img src={project.img_src} alt={project.title} />
          </a>
          <h3>{project.title}</h3>
          <h5>{project.tech_stack}</h5>
          <p>{project.description}</p>

          <IconGrid>
            <a href={project.githubLink}>
              <FaGithubAlt />
            </a>
            {project.url && (
              <a href={project.url}>
                <GoArrowUpRight />
              </a>
            )}
          </IconGrid>
        </>
      )}
    </ProjectCard>
  );
};

export default Project;
