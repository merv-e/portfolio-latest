import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  padding: 20px;
  text-align: center;
  margin-top: 80px;
  position: relative;

  a {
    margin-top: 20px;
  }
`;

export const Hero = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f7f7f7;
  position: relative;
  margin-top: 80px;
  height: 80vh;
`;

export const HeroContent = styled(motion.div)`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
   gap: 5rem;

  img {
    width: 300px;
    height: auto;
    border-radius: 50%;
  }

  p {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

export const Bio = styled.div`
  max-width: 600px;
  font-weight: 500;
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
  margin: 2rem;
`;

export const ProjectCard = styled(motion.div)`
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  transition: box-shadow 0.3s;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 4px 8px #79aea3;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-irems: center;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

export const IconGrid = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  img {
    width: 250px;
    height: auto;
    margin: 0 15px;
  }

  a {
    width: 100px;
    display: inline-block;
    padding: 10px 20px;
    background-color: #00274d;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      color: "#000";
    }
  }
`;