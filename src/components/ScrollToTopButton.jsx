import React from "react";
import { motion } from "framer-motion";
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

    &: hover {
      background-color: #0056b3;
    }

    &: focus {
      outline: none;
    }
  `;

  return (
    <div>
      <ScrollToTopBtn
        onClick={scrollToTop}
        // initial={{ opacity: 0, scale: 0.8 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.3 }}
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.9 }}
      >
        ↑
      </ScrollToTopBtn>
    </div>
  );
};

export default ScrollToTopButton;
