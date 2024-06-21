import React from "react";
import { ProjectsGrid, ProjectCard, IconGrid } from "../styledComponents";
import { projects } from "../utils/data";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithubAlt } from "react-icons/fa";

const Project = () => {
  const featuredProjects = projects.slice(0, 4);
  return (
    <>
      <h2>Featured Projects</h2>
      <ProjectsGrid>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id}>
            {/* <Link to={project.url}> */}
            <img src={project.img_src} alt={project.title} />
            <h3>{project.title}</h3>
            <h5>{project.tech_stack}</h5>
            <p>{project.description}</p>

            <IconGrid>
              <Link to={project.url}>
                <GoArrowUpRight />
              </Link>
              <Link to={project.githubLink}>
                <FaGithubAlt />
              </Link>
            </IconGrid>
            {/* </Link> */}
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </>
  );
};

export default Project;
