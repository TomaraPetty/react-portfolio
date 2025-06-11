import React from "react";
import "./aboutMe.css";
import tomara from "../../images/profile_sm.png";

function AboutMe() {
  const yearExperience = new Date().getFullYear() - 2020;

  return (
    <div className="about__container" id="about-me">
      <div className="profile-image">
        <img src={tomara} alt="Tomara Petty" />
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <h4>Climate Solutions Software Engineer</h4>
        <p>
          Full stack engineer dedicated to leveraging technology for positive
          social & environmental impact. With {yearExperience}+ years of
          professional software development experience, I have honed my skills
          in building innovative solutions to address a multitude of pressing
          challenges.
        </p>
        <p>
          My expertise spans across the entire software development lifecycle,
          with proficiency in stacks such as React, TypeScript, Next.js, Node, Prisma and
          PostgreSQL. Check my technologies section for more languages & frameworks I frequently utilize.
        </p>
        <p>
          In addition to my technical skills, I bring a passion for
          collaboration and problem-solving to every project I undertake. I
          enjoy working in cross-functional teams to brainstorm creative
          solutions and drive impactful outcomes. My ability to adapt quickly to
          new technologies and industry trends allows me to stay at the
          forefront of innovation in the ever-evolving tech sectors.
        </p>
        <p>
          When I’m not immersed in my coding projects, you can find me training
          Muay Thai, hiking with my dog, or performing at a local open mic night.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
