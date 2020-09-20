import React from "react";
import { StackTagProps } from "../interfaces/interfaces";
import "../styles/StackTag.scss";

export const StackTag = ({ children }: StackTagProps) => (
  <div className="tag">
    {children}
    <div className="tag__border tag__border--lt"></div>
    <div className="tag__border tag__border--rt"></div>
    <div className="tag__border tag__border--ld"></div>
    <div className="tag__border tag__border--rd"></div>
  </div>
);
