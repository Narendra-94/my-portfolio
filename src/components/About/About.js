import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { PageHeader } from "../PageHeader/PageHeader";
import { Animate } from "react-simple-animate";
import "./About.css";
import { FaReact } from "react-icons/fa";

import { TbBrandJavascript } from "react-icons/tb";
import { SiCss3 } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

const personDetails = [
  {
    label: "Name",
    value: "Narendra Chordiya",
  },
  {
    label: "Experience",
    value: "1.5 years",
  },
  {
    label: "Address",
    value: "Pune, Maharashtra, India",
  },
  {
    label: "Email",
    value: "narendrachordiya1234@gmail.com",
  },
  {
    label: "Contact",
    value: "8007571732",
  },
];

const jobSummary =
  "As a frontend developer, I excel in utilizing React, JavaScript, CSS, and HTML to create engaging and visually appealing web interfaces. With expertise in these technologies, I prioritize delivering clean code, modern design, and seamless user experiences";

export const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about-content">
        <div className="about-content-personal-wrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Frontend Developer</h3>
            <p> {jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personal-information">Personal Information</h3>
            <ul>
              {personDetails.map(({ label, value }, index) => (
                <li key={index}>
                  <span className="label">{label}</span>
                  <span className="value">{value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about-content-services-wrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about-content-services-wrapper-inner-content">
              <div>
                <FaReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <TbBrandJavascript
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
              <div>
                <SiCss3 size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <TbBrandTypescript
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
