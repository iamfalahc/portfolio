import React from "react";
import "../container.css";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
const Profile = () => {
  return (
    <div className="profile">
      <section className="profile-details">
        <div className="name">
          <h1>MUHAMMED</h1>
          <h1>FALAH</h1>
        </div>
        <h4>MERN STACK DEVELOPER</h4>
        <div className="social-platform">
          <FaGithub />
          <IoLogoLinkedin />
        </div>
        <span className="description">
        With a passion for developing modern React web apps for commercial businesses
        </span>
      </section>
      <section className="profile-image"></section>
    </div>
  );
};

export default Profile;
