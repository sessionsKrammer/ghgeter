import React from "react";
import "./Background.scss";

const BG: React.FC = () => {
  return (
    <div className="bgc">
      <div className="white">
        <div className="squares">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
      <div className="grey"></div>
    </div>
  );
};

export default BG;
