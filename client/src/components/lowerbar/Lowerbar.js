import React from "react";
import "./lowerbar.css";

export default function Lowerbar() {
  return (
    <div className="lowerbar">
      <div className="lowerbarWrapper">
        <div className="topRight">
          <div className="topbarIconContainer">
            <img className="farm" src="./images/farm.png" alt="Farm" />
          </div>
          <div className="topbarIconContainer">
            <img className="land1" src="./images/land1.png" alt="Land1" />
          </div>
          <div className="topbarIconContainer">
            <img className="land3" src="./images/land3.png" alt="Land3" />
          </div>
          <div className="topbarIconContainer">
            <img className="land2" src="./images/land2.png" alt="Land2" />
          </div>
          <div className="topbarIconContainer">
            <img className="farmer" src="./images/farmer.png" alt="Farmer" />
          </div>
        </div>
      </div>
    </div>
  );
}
