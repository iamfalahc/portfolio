import React from "react";
import "./profile.css";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import profileImage from "../../assets/Picsart_24-01-21_21-01-42-237-01.jpeg";
const Profile = () => {
  return (
    <div className="profile">
      <section className="profile-details">
        <div className="name">
          <h1>MUHAMMED</h1>
          <h1>FALAH</h1>
        </div>
        <div className="title">
          {" "}
          <h4>MERN STACK DEVELOPER</h4>
        </div>
        <div className="social-platform">
          <FaGithub className="social-icon" />
          <IoLogoLinkedin className="social-icon" />
        </div>
       <div className="description">
       <span>
          With a passion for developing modern React web apps for commercial
          businesses
        </span>
       </div>
        <button className="resume-btn">Resume</button>
      </section>
      <section className="image-section">
        <img className="profile-image" src={profileImage} alt="profile-image" />
      </section>
    </div>
  );
};

export default Profile;
