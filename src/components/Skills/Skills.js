import React from "react";
import { PageHeader } from "../PageHeader/PageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import "./Skills.css";

export const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeader
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};
