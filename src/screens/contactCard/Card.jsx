import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Card.css";
import { FaHouse } from "react-icons/fa6";

const Card = () => {
  const personalData = {
    name: { first: "Tomara", last: "Petty" },
    location: {
      city: "Portland",
      state: "OR",
    },
    email: "tomara.petty@gmail.com",
    linkedin: "linkedin.com/in/tomara-petty",
    github: "github.com/tomarapetty",
  };

  return (
    <>
      <div className="contact__container section__container">
        <h1 className="header">Contact Info</h1>
        <a href={`https://${personalData.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact__card">
          <FaLinkedinIn className="contact__icons" />
          <span className="contact__name">{personalData.linkedin}</span>
        </a>
        <a href={`https://${personalData.github}`} target="_blank" rel="noopener noreferrer" className="contact__card">
          <FaGithub className="contact__icons" />
          <span className="contact__name">{personalData.github}</span>
        </a>
        <a href={`mailto:${personalData.email}`} className="contact__card">
          <FaEnvelope className="contact__icons" />
          <span className="contact__name">{personalData.email}</span>
        </a>
        <a href="https://maps.google.com/?q=Portland,OR" target="_blank" rel="noopener noreferrer" className="contact__card">
          <FaHouse className="contact__icons" />
          <span className="contact__name">
            {personalData.location.city}, {personalData.location.state}
          </span>
        </a>
      </div>
    </>
  );
};

export default Card;
