import React from "react";
import { Hello } from "./pages/Hello";
import { About } from "./pages/About";
import "../styles/Content.scss";

export const Content = () => {
  return (
    <main>
      <Hello />
      <About />
    </main>
  );
};
