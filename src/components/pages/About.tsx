import React, { useRef } from "react";
import "../../styles/pages/About.scss";

export const About = () => {
  const borderDot = useRef<HTMLDivElement>(null);

  const handleDotAnimation = () => {
    borderDot.current?.classList.add("about__header-border--animation");
  };

  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="about__header">
          <h2>About</h2>
          <div
            ref={borderDot}
            onClick={handleDotAnimation}
            className="about__header-border"
          ></div>
        </div>
      </div>
    </section>
  );
};
