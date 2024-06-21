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
import { bio, projects, socials } from "../utils/data";

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
            <Button href="/about">About Me</Button>
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
        <Button href={socials.github}>View All</Button>
      </Container>
      
      <Container>
        <Skill />
      </Container>
    </>
  );
};

export default Home;
