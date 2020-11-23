import React from "react";
import style from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={ style.footer }>
      <div className={ style.container }>
        <div className={ style.info }>
          <p className={ style.author }>Anton Voytenko</p>
          <p className={ style.year }>{ new Date().getFullYear() }</p>
        </div>
        <div className={ style.logo } />
      </div>
    </footer>
  );
};