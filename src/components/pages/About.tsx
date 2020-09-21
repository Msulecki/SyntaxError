import React from "react";
import { Header } from "../Header";
import "../../styles/pages/About.scss";

export const About = () => (
  <section id="about" className="about">
    <div className="about__header">
      <Header title="About" />
    </div>
    <div className="about__content">
      I'm constantly developing my skills in making user interfaces and web
      apps, with use of my previous experience in e-commerce projects. I want to
      help you write timeproof code, with good practises and teamworking. My
      ultimate goal is to become a software developer who can transform your
      ideas into top-level, modern code.
    </div>
  </section>
);
