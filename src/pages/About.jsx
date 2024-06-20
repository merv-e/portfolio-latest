import React from "react";
import { Container, Hero, HeroContent, Bio } from "../styledComponents";

const About = () => (
  <Container>
    <Hero
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroContent>
        <Bio>
          <h1>About Me</h1>
          <p>[Detailed bio, background, education, and experience]</p>
        </Bio>
      </HeroContent>
    </Hero>
    <Container>
      <h2>My Journey</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>2024</h3>
          <p>Milestone or achievement description.</p>
        </div>
        <div className="timeline-item">
          <h3>2023</h3>
          <p>Milestone or achievement description.</p>
        </div>
      </div>
    </Container>
  </Container>
);

export default About;
