import React from "react";

const CardLarge = ({ label, icon, topText, leftText, rightText }) => {
  return (
    <div className="card-large">
      {/* Top Section */}
      <div className="card-large-top">
        <span className="card-large-text">{topText}</span>
        <i className={`card-large-icon ${icon}`}></i>
      </div>

      {/* Bottom Section */}
      <div className="card-large-bottom">
        <div className="left-section">{leftText}</div>
        <div className="right-section">{rightText}</div>
      </div>
    </div>
  );
};

export default CardLarge;
