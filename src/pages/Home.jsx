import React from "react";
import { motion } from "framer-motion";
import {
  Hero,
  HeroContent,
  Bio,
  Button,
  Container,
  ProjectsGrid,
} from "../styledComponents";
import dev_photo from "../assets/photo.jpg";
import { Project, Skill } from "../components";
import { bio, projects } from "../utils/data";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredProjects = projects.slice(0, 4);
  return (
    <>
      <Hero>
        <HeroContent>
          <motion.img
            src={dev_photo}
            alt="Developer Photo"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <Bio>
            <h1>{bio.header}</h1>
            <p>{bio.para}</p>
            <Link to="/about">
              <Button>About Me</Button>
            </Link>
          </Bio>
        </HeroContent>
      </Hero>
      <Container>
        <h2>Featured Projects</h2>
        <ProjectsGrid>
          {featuredProjects.map((project) => (
            <Project
              key={project.id}
              prj_title={project.title}
              image={project.img_src}
              prj_url={project.url}
              prj_github={project.githubLink}
              tech_stck={project.tech_stack}
            />
          ))}
        </ProjectsGrid>
        <Link to="/projects">
          <Button> View All</Button>
        </Link>
      </Container>

      <Container>
        <Skill />
      </Container>
    </>
  );
};

export default Home;
