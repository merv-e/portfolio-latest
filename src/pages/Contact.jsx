import React from "react";
import { Container, ContactForm } from "../styledComponents";

const Contact = () => (
  <Container>
    <h2>Contact Me</h2>
    <ContactForm>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Send</button>
    </ContactForm>
  </Container>
);

export default Contact;
