import React from "react";
import { SkillsGrid, SkillItem } from "../styledComponents";
import { skills } from "../utils/data";
import { FaHtml5, FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import {
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiJest,
  SiJquery,
} from "react-icons/si";
import { motion } from "framer-motion";

const Skill = () => {
  const icons = {
    html5: FaHtml5,
    css3: FaCss3,
    javaScript: TbBrandJavascript,
    react: FaReact,
    redux: SiRedux,
    bootstrap: FaBootstrap,
    tailwindCss: SiTailwindcss,
    typeScript: SiTypescript,
    jest: SiJest,
    jquery: SiJquery,
  };

  const iconStyle = () => ({
    fontSize: "1.8em",
    color: "#FC440F",
    transition: "color 0.3s ease",
    width: "120px",
  });

  return (
    <>
      <h2>Skills Overview</h2>
      <SkillsGrid>
        {skills.map((skill) => {
          const TechIcon = icons[skill.name];

          if (!TechIcon) {
            console.error(`Icon component for ${skill.id} is not found.`);
            return null;
          }
          return (
            <SkillItem key={skill.id}>
              <motion.div
                whileHover={{ scale: 1.5, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%",
                }}
              >
                <TechIcon style={iconStyle(skill.id)} />
              </motion.div>
              <p>{skill.name[0].toUpperCase() + skill.name.slice(1)}</p>
            </SkillItem>
          );
        })}
      </SkillsGrid>
    </>
  );
};

export default Skill;
