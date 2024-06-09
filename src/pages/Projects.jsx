import React from "react";
import { Container, ProjectsGrid, ProjectCard } from "../styledComponents";

const Projects = () => (
  <Container>
    <h2>My Projects</h2>
    <ProjectsGrid>
      <ProjectCard>
        <img src="project1.jpg" alt="Project 1" />
        <h3>Project Title</h3>
        <p>Description, technologies used, and links.</p>
        <a href="#">View Project</a>
      </ProjectCard>
      <ProjectCard>
        <img src="project2.jpg" alt="Project 2" />
        <h3>Project Title</h3>
        <p>Description, technologies used, and links.</p>
        <a href="#">View Project</a>
      </ProjectCard>
    </ProjectsGrid>
  </Container>
);

export default Projects;
