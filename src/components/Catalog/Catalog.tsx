import React from "react";
import { SneakersList } from "./SneakerList/SneakersList";
import { useSelector } from "react-redux";
import { IState } from "../../redux/rootReducer";
import { Filter } from "./Filter";
import style from './Catalog.module.css';

export const Catalog = () => {
  const { filteredList } = useSelector((state: IState) => state.sneakers);
  if (!filteredList.length) {
    return (
      <div className={ style.catalog }>
        <Filter />
        <div className={ style.nothing }>It's empty here...</div>
      </div>
    );
  }
  return (
    <div className={ style.catalog }>
      <Filter />
      <SneakersList />
    </div>
  );
};