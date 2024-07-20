import React from "react";
import { Project } from "../components";
import { projects, socials } from "../utils/data";
import { Button, Container, ProjectsGrid } from "../styledComponents";

const Projects = () => (
  <Container>
    <h1 style={{ margin: "100px 0 50px 0" }}>My Projects</h1>
    <ProjectsGrid>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ProjectsGrid>
    <Button href={socials[0].link} target="_blank" rel="noopener noreferrer">
      Visit Github
    </Button>
  </Container>
);

export default Projects;
