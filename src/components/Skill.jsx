import React from "react";
import { SkillsGrid, SkillItem } from "../styledComponents";

const Skill = () => {
  return (
    <>
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
    </>
  );
};

export default Skill;
