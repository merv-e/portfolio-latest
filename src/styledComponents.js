import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  padding: 50px;
  text-align: center;
`;

export const Hero = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f7f7f7;
`;

export const HeroContent = styled(motion.div)`
  max-width: 1200px;
  display: flex;
  align-items: center;
  gap: 50px;

  img {
    width: 200px;
    height: auto;
    border-radius: 50%;
  }
`;

export const Bio = styled.div`
  max-width: 600px;
`;

export const Button = styled(motion.a)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #00274d;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5bc0eb;
  }
`;

export const ProjectsGrid = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProjectCard = styled(motion.div)`
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const SkillsGrid = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SkillItem = styled(motion.div)`
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;

  label {
    align-self: flex-start;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
  }

  textarea {
    height: 150px;
    resize: vertical;
  }

  button {
    align-self: flex-start;
    padding: 10px 20px;
    background-color: #00274d;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #5bc0eb;
    }
  }
`;
