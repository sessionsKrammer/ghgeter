import React, { useState } from "react";
import "./Toggle.scss";

const Toggle = () => {
  const [theme, setTheme] = useState("default");

  const clickToggle = () => {
    if (theme === "default") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("default");
      document.documentElement.setAttribute("data-theme", "");
    }
  };

  return (
    <div className="toggle" onClick={clickToggle}>
      <div
        className="ball"
        style={{
          transform: `translateX(${theme === "dark" ? "0" : "100%"})`,
        }}
      ></div>
    </div>
  );
};

export default Toggle;
