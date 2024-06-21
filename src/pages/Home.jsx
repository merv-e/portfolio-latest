import React from "react";
import { motion } from "framer-motion";
import { Hero, HeroContent, Bio, Button, Container } from "../styledComponents";
import { bio } from "../utils/data";
import dev_photo from "../assets/photo.jpg";
import { Project, Skill } from "../components";
import { projects } from "../utils/data";

const Home = () => {
  const featuredProjects = projects.slice(0, 4);
  return (
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
            <Button href="/project">View Projects</Button>
          </Bio>
        </HeroContent>
      </Hero>
      <Container>
        <h2>Featured Projects</h2>
        {featuredProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Container>

      {/* Todo: Skill section might be added to Bio */}
      <Container>
        <Skill />
      </Container>
    </main>
  );
};

export default Home;
