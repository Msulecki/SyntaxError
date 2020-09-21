import React from "react";
import { ReactComponent as SyntaxLogo } from "../images/logo.svg";
import "../styles/Logo.scss";

export const Logo = () => (
  <div className="logo">
    <SyntaxLogo className="logo__img" />
    <div className="logo__name">Syntax Error</div>
  </div>
);
