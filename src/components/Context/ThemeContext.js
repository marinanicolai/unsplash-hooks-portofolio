import React from "react";

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);
