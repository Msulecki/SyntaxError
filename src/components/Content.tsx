import React from "react";
import { Hello } from "./pages/Hello";
import { About } from "./pages/About";
import { Stack } from "./pages/Stack";
import { Contact } from "./pages/Contact";
import "../styles/Content.scss";

export const Content = () => (
  <main>
    <Hello />
    <About />
    <Stack />
    <Contact />
  </main>
);
