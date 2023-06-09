import React from "react";
import "./PageHeader.css";

export const PageHeader = ({ headerText, icon }) => {
  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};
