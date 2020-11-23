import React from "react";
import { NavLink } from "react-router-dom";
import { Favorites } from "./Favorites";
import style from './Home.module.css';

export const Home = () => {
  return (
    <div className={ style.home }>
      <Favorites />
      <NavLink className={ style.moreButton } to='/catalog'>More</NavLink>
    </div>
  );
};