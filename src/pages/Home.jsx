import React from "react";
import { motion } from "framer-motion";
import {
  Hero,
  HeroContent,
  Bio,
  Button,
  ProjectsGrid,
  ProjectCard,
  SkillsGrid,
  SkillItem,
  Container,
} from "../styledComponents";
import { bio, projects } from "../data/data";
import dev_photo from "../assets/photo.jpg";

const Home = () => (
  <main>
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
          <Button href="/projects">View Projects</Button>
        </Bio>
      </HeroContent>
    </Hero>
    <Container>
      <h2>Featured Projects</h2>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <>
              <img src={project.img_src} alt={project.title} />
              <h3>{project.title}</h3>
              <h5>{project.tech_stack}</h5>
              <p>{project.description}</p>
            </>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Container>
    <Container>
      <h2>Skills Overview</h2>
      <SkillsGrid>
        <SkillItem>
          <img src="html5-icon.png" alt="HTML5" />
          <p>HTML5</p>
        </SkillItem>
        <SkillItem>
          <img src="css3-icon.png" alt="CSS3" />
          <p>CSS3</p>
        </SkillItem>
      </SkillsGrid>
    </Container>
  </main>
);

export default Home;
