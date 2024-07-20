import React from "react";
import { ProjectCard, IconGrid, Button } from "../styledComponents";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithubAlt } from "react-icons/fa";

const Project = (props) => {
  const { title, id, img_src, description, tech_stack, url, githubLink } =
    props.project;

  return (
    <ProjectCard>
      <a
        href={url ? url : githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img_src} alt={title} />
      </a>
      <h3>{title}</h3>
      <h5>{tech_stack}</h5>
      <p>{description}</p>

      <IconGrid>
        <Button href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithubAlt />
        </Button>
        {url && (
          <Button href={url} target="_blank" rel="noopener noreferrer">
            <GoArrowUpRight />
          </Button>
        )}
      </IconGrid>
    </ProjectCard>
  );
};

export default Project;
