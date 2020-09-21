import React from "react";
import { StackTag } from "../StackTag";
import "../../styles/pages/Stack.scss";
import { Header } from "../Header";
import tags from "../../data/tags.json";

export const Stack = () => (
  <section className="stack">
    <div className="stack__column">
      <div className="stack__header">
        <Header title="Tech &amp; Tools" />
      </div>
      <div className="stack__list">
        {tags.map((tag, index) => (
          <div key={index} className="stack__item">
            <StackTag>{tag}</StackTag>
          </div>
        ))}
      </div>
    </div>
  </section>
);
