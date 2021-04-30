import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/bkgrd-video.mp4" autoPlay loop muted />
      <h1>Hello</h1>
      <p>I'm Brandon</p><p> Welcome to my portfolio</p>
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
  );
}

export default HeroSection;
