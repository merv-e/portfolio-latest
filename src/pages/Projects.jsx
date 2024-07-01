import React from "react";
import { Project } from "../components";
import { projects, socials } from "../utils/data";
import { Button, Container, ProjectsGrid } from "../styledComponents";

const Projects = () => (
  <>
    <Container>
      <h2>My Projects</h2>
      <ProjectsGrid>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ProjectsGrid>
      <Button href={socials.github} target="_blank">
        Visit Github
      </Button>
    </Container>
  </>
);

export default Projects;
