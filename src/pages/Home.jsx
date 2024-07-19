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
import { aboutMe, projects } from "../utils/data";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredProjects = projects.slice(0, 4);

  const { title, bio } = aboutMe;

  return (
    <>
      <Hero>
        <HeroContent>
          <motion.img
            src={dev_photo}
            alt="Developer Photo"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          />
          <Bio>
            <h1>{title}</h1>
            <p>{bio}</p>
          </Bio>
        </HeroContent>
      </Hero>
      <Container>
        <Skill />
      </Container>
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

    </>
  );
};

export default Home;
