import React from "react";
import { HeaderProps } from "../interfaces/interfaces";
import "../styles/Header.scss";

export const Header = ({ title }: HeaderProps) => (
  <h3 className="header">
    {title.includes("&")
      ? title.split("&").map((text, index) => (
          <>
            {text}
            {title.split("&").length > index + 1 && <span>&amp;</span>}
          </>
        ))
      : title}
    <div className="header__border header__border--lt"></div>
    <div className="header__border header__border--rt"></div>
    <div className="header__border header__border--ld"></div>
    <div className="header__border header__border--rd"></div>
  </h3>
);
