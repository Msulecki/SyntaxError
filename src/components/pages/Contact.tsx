import React from "react";
import { Header } from "../Header";
import "../../styles/pages/Contact.scss";

export const Contact = () => (
  <section className="contact">
    <div className="contact__header">
      <Header title="Let's keep in touch" />
    </div>
    <div className="contact__content">
      <ul className="contact__column">
        <li>
          <a href="mailto:hello@syntax.website">hello@syntax.website</a>
        </li>
        <li>
          <a href="tel:+48519625768">+48 519 625 768</a>
        </li>
      </ul>
      <ul className="contact__column">
        <li>Syntax Error: Mateusz Sulecki</li>
        <li>NIP: 571-166-13-13</li>
      </ul>
    </div>
  </section>
);
