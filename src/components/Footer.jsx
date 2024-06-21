import React from "react";
import { Link } from "react-router-dom";
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
`;

const Footer = () => (
  <FooterContainer>
    <IconGrid>
      <a href={socials.linkedIn}>
        <FaLinkedin style={{ fontSize: "1.8em", color: "black" }} />
      </a>
      <a href={socials.github}>
        <FaGithub style={{ fontSize: "1.8em", color: "black" }} />
      </a>
      <a href={socials.x}>
        <FaSquareXTwitter style={{ fontSize: "1.8em", color: "black" }} />
      </a>
    </IconGrid>
    <p>© 2024 Merve Betül Üstün. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
