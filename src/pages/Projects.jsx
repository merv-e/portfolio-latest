import React from "react";
import { Project } from "../components";
import { projects } from "../utils/data";
import { Container } from "../styledComponents";

const Projects = () => (
  <Container>
    <h2>My Projects</h2>
    {projects.map((project) => (
      <Project key={project.id} project={project} />
    ))}
  </Container>
);

export default Projects;
