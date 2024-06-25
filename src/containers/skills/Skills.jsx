import React from "react";
import "./skills.css";
import checkMarkLight from "../../assets/checkmark-light.svg";

const Skills = () => {
  return (
    <div className="skills">
      <h1>SKILLS</h1>
      <div className="skills-container">
        <section>
          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" /> HTML
          </span>
          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" /> CSS
          </span>
          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" />{" "}
            JavaScript
          </span>
          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" />{" "}
            Bootstrap
          </span>
          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" />{" "}
            Tailwind CSS
          </span>
        </section>
        <section>
          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" /> ES6
          </span>

          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" /> React
            JS
          </span>
          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" /> Git
          </span>
          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" /> Git
            Hub
          </span>
          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" /> Redux
          </span>
        </section>
        <section>
          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" /> Node
            JS
          </span>
          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" />{" "}
            Express
          </span>
          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" /> Mongo
            DB
          </span>
          <span>
            <img className="check-mark-img" src={checkMarkLight} alt="" /> EJS
          </span>
        </section>
      </div>
    </div>
  );
};

export default Skills;
