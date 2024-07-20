import React from "react";
import styled from "styled-components";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ScrollToTopBtn = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, transform 0.3s;
    opacity: 0.7;
    scale: 0.8

    &: focus {
      background-color: #0056b3;
      outline: none;
      opacity: 1;
    }
  `;

  return (
    <div>
      <ScrollToTopBtn onClick={scrollToTop}>↑</ScrollToTopBtn>
    </div>
  );
};

export default ScrollToTopButton;
