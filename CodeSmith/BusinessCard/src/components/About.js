import React from "react";

const About = () => {
  console.log("about");
  return (
    <div className="aboutContainer">
      <h2 className="aboutHeader">Meet the team!</h2>
      <div className="about">
        <div className="madisonPic" />
        <p>
          Madison is a Software engineer and musician from New York, NY. When
          not helping to maintain Synapse, he enjoys building full-stack NodeJS
          and React applications and playing the piano.
        </p>
        <div className="aboutLinks">
          <a
            className="aboutLinkedin"
            href="https://www.linkedin.com/in/madison-brown-303ab11b0/"
          >
            LinkedIn
          </a>
          <a className="aboutGithub" href="https://github.com/madisonbrown">
            GitHub
          </a>
        </div>
      </div>
      <div className="about">
        <div className="markPic" />
        <p>
          Mark is a full-stack engineer with a focus in React, Redux, and other
          front-end technologies. In his free-time, he loves taking walks along
          the Hudson with his dog and studying game design.
        </p>
        <div className="aboutLinks">
          <a
            className="aboutLinkedin"
            href="https://www.linkedin.com/in/mark-lee-26aab11b0/"
          >
            LinkedIn
          </a>
          <a href="github.com/markcmlee" className="aboutGithub">
            GitHub
          </a>
        </div>
      </div>
      <div className="about">
        <div className="denisPic" />
        <p>
          Creator of seamless user experience. Passionate about React Hooks and
          Flux architecture, backing it up with Node and Express. When not
          coding - Denys hunts for the best pierogis in town.
        </p>
        <div className="aboutLinks">
          <a
            className="aboutLinkedin"
            href="https://www.linkedin.com/in/denysdekhtiarenko/"
          >
            LinkedIn
          </a>
          <a className="aboutGithub" href="https://github.com/denskarlet">
            GitHub
          </a>
        </div>
      </div>
      <div className="about">
        <div className="hangPic" />
        <p>
          Hang is a Software engineer originally from California. He is
          experienced with DevOps and on his off time pwns noobs on Dota.
        </p>
        <div className="aboutLinks">
          <a
            className="aboutLinkedin"
            href="https://www.linkedin.com/in/hang-xu-187953196/
"
          >
            LinkedIn
          </a>
          <a className="aboutGithub" href="https://github.com/nplaner">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
