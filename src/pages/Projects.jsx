import React from "react";
import { Project } from "../components";
import { projects, socials } from "../utils/data";
import { Button, Container, ProjectsGrid } from "../styledComponents";

const Projects = () => (
  <Container>
    <h2>My Projects</h2>
    <ProjectsGrid>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ProjectsGrid>
    <a href={socials.github} target="_blank" rel="noopener noreferrer">
      Visit Github
    </a>
  </Container>
);

export default Projects;
