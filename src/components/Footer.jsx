import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #00274d;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const SocialLinks = styled.div`
  img {
    width: 30px;
    margin: 0 10px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <SocialLinks>
      <a href="#">
        <img src="linkedin-icon.png" alt="LinkedIn" />
      </a>
      <a href="#">
        <img src="github-icon.png" alt="GitHub" />
      </a>
      <a href="#">
        <img src="twitter-icon.png" alt="Twitter" />
      </a>
    </SocialLinks>
    <p>© 2024 [Your Name]. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
