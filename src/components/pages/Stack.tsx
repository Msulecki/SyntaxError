import React from "react";
import { StackTag } from "../StackTag";
import "../../styles/pages/Stack.scss";

export const Stack = () => {
  return (
    <section className="stack">
      <div className="stack__column">
        <div className="stack__header">
          <h3>Tech</h3>
        </div>
      </div>
      <div className="stack__column">
        <div className="stack__header">
          <h3>Tools</h3>
        </div>
        <div className="stack__list">
          <div className="stack__item">
            <StackTag>React</StackTag>
          </div>
          <div className="stack__item">
            <StackTag>React</StackTag>
          </div>
        </div>
      </div>
    </section>
  );
};
