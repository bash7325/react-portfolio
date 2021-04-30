import React from "react";
import CardItem from "./CardItem";
import './Cards.css';
import CardImage from '../images/projects-link.jpg'

function Cards() {
  return (
    <div className="cards">
      <h1>Check out my projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
              <CardItem
              src={CardImage}
              text="Click to see my work"
              label="Projects"
              path='/projects'
              />
              <CardItem
              src={CardImage}
              text="Click to see my work"
              label="Projects"
              path='/projects'
              />
              <CardItem
              src={CardImage}
              text="Click to see my work"
              label="Projects"
              path='/projects'
              />
          </ul>
          <ul className="cards__items">
              <CardItem
              src={CardImage}
              text="Click to see my work"
              label="Projects"
              path='/projects'
              />
              <CardItem
              src={CardImage}
              text="Click to see my work"
              label="Projects"
              path='/projects'
              />
              <CardItem
              src={CardImage}
              text="Click to see my work"
              label="Projects"
              path='/projects'
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
