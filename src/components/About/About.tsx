import React from "react";
import style from './About.module.css';

export const About = () => {
  return (
    <div className={ style.about }>
      <a
        href="https://app.swaggerhub.com/apis-docs/tg4solutions/the-sneaker-database/1.0.0#/sneakers/getSneakers"
        className={ style.text }
      >
        Used Sneakers API
      </a>
    </div>
  );
};