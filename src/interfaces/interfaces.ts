import { ReactChildren, ReactComponentElement } from "react";

export interface ThemeToggleProps {
  darkTheme: Boolean;
  setDarkTheme: Function;
}

export interface StackTagProps {
  children: string | React.ReactNode;
}

export interface HeaderProps {
  title: string;
}
