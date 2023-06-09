import React from "react";
import { PageHeader } from "../PageHeader/PageHeader";
import { BsInfoCircleFill } from "react-icons/bs";

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeader
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};
