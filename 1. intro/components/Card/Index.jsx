import React from "react";
import "./Index.css";

const Card = ({ title, subtitle, bckImg, textColor, buttonTxt,logger,logparams }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={bckImg} alt="" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p style={{ color: textColor }}>{subtitle}</p>
        <button onClick={()=>logger(logparams)} style={{ backgroundColor: textColor }}>{buttonTxt}</button>
      </div>
    </div>
  );
};

export default Card;
