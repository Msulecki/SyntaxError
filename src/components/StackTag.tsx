import React from "react";
import { StackTagProps } from "../interfaces/interfaces";
import "../styles/StackTag.scss";

export const StackTag = ({ children }: StackTagProps) => (
  <div className="tag">{children}</div>
);
