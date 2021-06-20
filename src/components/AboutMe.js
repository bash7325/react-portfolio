import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <hr />
      <div className="about-container">
        <p>
          A recent graduate of the University of Utah's Full Stack Web
          Development program. I am currently working as a developer focused on
          maintaining and building front-end applications in HTML/CSS, SQL, C#
          and Javascript. I am also studying AWS, React and Python. I've been
          able to apply my new knowledge to personal projects and hobbies.
        </p>
        <p>
          I enjoy exploring the mountains and deserts of Utah hiking,
          backpacking, paddle boarding and fishing. I am intrigued by anything
          tech related. I love hands on activities i.e. gaming, tinkering with
          computers, woodwork and working on cars to name a few.
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            CONTACT ME
          </Button>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
