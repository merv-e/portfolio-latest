import styled from "styled-components";

export const Container = styled.div`
  padding: 50px;
  text-align: center;
`;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f7f7f7;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Bio = styled.div`
  max-width: 600px;
`;

export const Button = styled.a`
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

export const ProjectsGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProjectCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const SkillsGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SkillItem = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;