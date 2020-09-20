import React from "react";
import "../../styles/pages/Hello.scss";
import { ReactComponent as Arrow } from "../../images/down_arrow.svg";

export const Hello = () => (
  <section className="hello">
    <div className="hello__wrapper">
      <h1>
        <span>Hi</span>
        <span>,</span>
        <span> I'm Matt</span>
        <span>.</span>
        <span> Webdeveloper</span>
        <span>.</span>
      </h1>
      <div className="hello__arrow">
        <a href="#about" title="Go to About page">
          <Arrow className="hello__arrow--svg" />
        </a>
      </div>
    </div>
  </section>
);
