import React from "react";

const CardSmall = ({ icon, title, subtitle }) => {
  return (
    <div className="card-small">
      <i className={`card-icon ${icon}`}></i>
      <div className="card-text">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CardSmall;
