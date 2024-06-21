import React from "react";
import { ProjectsGrid, ProjectCard } from "../styledComponents";
import { projects } from "../utils/data";
import { Link } from "react-router-dom";

const Project = () => {
  const featuredProjects = projects.slice(0, 3);
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
            <Link to={project.url}>
              <img src="" alt="" />
              Website{" "}
            </Link>
            <Link to={project.githubLink}>
              <img src="" alt="" />
              Github{" "}
            </Link>
            {/* </Link> */}
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </>
  );
};

export default Project;
