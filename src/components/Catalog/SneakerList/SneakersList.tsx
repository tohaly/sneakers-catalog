import React from 'react';
import { useSelector } from "react-redux";
import { IState } from "../../../redux/rootReducer";
import { Card } from "../../Card";
import style from './SneakersList.module.css';


export const SneakersList = () => {
  const { filteredList } = useSelector((state: IState) => state.sneakers);

  return (
    <div className={ style.sneakerList }>
      { filteredList.map((sneaker) => {
        return <Card key={ sneaker.id } { ...sneaker } />;
      }) }
    </div>
  );
};