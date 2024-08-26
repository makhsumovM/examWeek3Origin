import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkside from "../hooks/useDarkside.hook";



const Switcher = () => {
  const [colorTheme, setTheme] = useDarkside();
  const [isDarkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };
  const defaultProperties = {
    dark: {
      circle: {
        r: 9,
      },
      mask: {
        cx: '50%',
        cy: '23%',
      },
      svg: {
        transform: 'rotate(40deg)',
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 5,
      },
      mask: {
        cx: '100%',
        cy: '0%',
      },
      svg: {
        transform: 'rotate(90deg)',
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };
  return (
    <DarkModeSwitch
      animationProperties={defaultProperties}
      style={{ }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      moonColor="#C0C0C0"
      sunColor="yellow"
      size={50}
    />
  );
};

export default Switcher;