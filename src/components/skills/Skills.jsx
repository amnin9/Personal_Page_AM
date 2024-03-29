import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import OtherTechnologies from "./Backend";

const Skills = () => {
  return (
    <section className="skills section skills__blob" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <Frontend />
        <OtherTechnologies />
      </div>
    </section>
  );
};

export default Skills;
