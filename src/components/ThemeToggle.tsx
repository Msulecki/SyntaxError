import React, { useEffect } from "react";
import { ThemeToggleProps } from "../interfaces/interfaces";
import "./../styles/ThemeToggle.scss";

export const ThemeToggle = (props: ThemeToggleProps) => {
  const { darkTheme, setDarkTheme } = props;
  const handleDarkTheme = () => {
    localStorage.setItem("darkTheme", (!darkTheme).toString());
    setDarkTheme(!darkTheme);
  };
  useEffect(() => {
    function setDarkScheme() {
      setDarkTheme(true);
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addListener(setDarkScheme);
    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeListener(setDarkScheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <button
      aria-label="Dark theme toggle"
      onClick={handleDarkTheme}
      className={`theme-toggle ${darkTheme ? "active" : ""}`}
    >
      <div className="theme-toggle__indicator"></div>
    </button>
  );
};
