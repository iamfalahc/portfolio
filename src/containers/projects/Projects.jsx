import React from "react";
import "./projects.css";
import eCommerceImage from "../../assets/4c1e9d4c49f1ee74f3bb871a181fea10.png";
import mediCareImage from "../../assets/6f284a9f73c07555fb01e4526872d63f4a226fba7e897a3c4a3e1a601c124efd.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <header className="tittle">
        <h1>PROJECTS</h1>{" "}
      </header>
      <div className="projects-container">
        <div className="project">
          <img className="ecommerce-image" src={eCommerceImage} alt="" />
          <h4>E COMMERCE</h4>
          <span>E Commerce Website</span>
        </div>

        <div className="project">
         <img className="medicare-image" src={mediCareImage} alt="" />
          <h4>MEDI CARE</h4>
          <span>Doctor Booking Website</span>
        </div>

      </div>
    </div>
  );
};

export default Projects;
