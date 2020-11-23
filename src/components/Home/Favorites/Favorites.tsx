import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../../../redux/rootReducer";
import { Card } from "../../Card";
import style from "./Favorites.module.css";

export const Favorites = () => {
  const { list } = useSelector((state: IState) => state.sneakers);
  return (
    <div className={ style.favorites }>
      <h2 className={ style.title }>Favorites</h2>
      <ul className={ style.list }>
        { list.map((sneaker, index) => index <= 2 &&
          <li key={ sneaker.id } className={ style.item }>
            <Card { ...sneaker } />
          </li>) }
      </ul>
    </div>
  );
};