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
        A current student in the University of Utah’s full stack web development
        bootcamp currently honing skills in HTML, CSS, Javascript, popular
        frameworks and third-party API’s. I have a rich work history varying
        from leading teams as an Executive Chef and manager in high volume, fine
        dining restaurants to complex problem solving and situational awareness
        as an EMT. I am passionate about creating experiences that are elevated
        for the user and t he process that goes into reaching that goal. I am
        eager to combine my background in leadership and problem solving with my
        newly acquired technical skills to help grow capable, dynamic teams and
        build great applications.
      </p>
      <p>
        I love to spend time with my dog, Riley and my family. I enjoy exploring
        the mountains and deserts of Utah hiking, backpacking, paddle boarding
        and fishing. I am intrigued by anything tech related. I love hands on
        activities i.e. gaming, tinkering with computers, woodwork and working
        on cars to name a few.
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
