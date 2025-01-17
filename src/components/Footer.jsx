import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IconGrid } from "../styledComponents";
import { socials } from "../utils/data";

const FooterContainer = styled.footer`
  background-color: #00274d;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 5rem;
`;

const icons = {
  github: FaGithub,
  linkedIn: FaLinkedin,
  twitter: FaSquareXTwitter,
};

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const iconStyle = (id) => ({
    fontSize: "1.8em",
    color: hoveredIcon === id ? "#000401" : "wheat",
    transition: "color 0.3s ease",
  });

  return (
    <FooterContainer>
      <IconGrid>
        {socials.map((social) => {
          const IconComponent = icons[social.id];
          if (!IconComponent) {
            console.error(`Icon component for ${social.id} is not found.`);
            return null;
          }

          return (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent
                style={iconStyle(social.id)}
                onMouseEnter={() => setHoveredIcon(social.id)}
                onMouseLeave={() => setHoveredIcon(null)}
              />
            </a>
          );
        })}
      </IconGrid>
      <p>© 2024 Merve Betül Üstün. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
