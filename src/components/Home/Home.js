import React from "react";
import { Animate } from "react-simple-animate";
import "./Home.css";
import Resume from "../Resume/Narendra_Chordiya_Resume.pdf";
export const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-text-wrapper">
        <h1>
          Hello I'm Narendra
          <br />
          Front-end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="home-contact-me">
          <button>
            <a href={Resume} download>
              Download Resume
            </a>
          </button>
        </div>
      </Animate>
    </section>
  );
};
