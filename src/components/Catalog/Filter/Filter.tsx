import React, {useEffect, useRef} from 'react';
import classNames from 'classnames/bind';
import { BrandList } from "./BrandList/BrandList";
import { Other } from "./Other";
import style from './Filter.module.css';
import { Control } from "./Control";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../redux/rootReducer";
import { openFilter } from "../../../redux/interface/actions";
import {useScrollPosition} from "../../../utils/useScroll";

let cx = classNames.bind(style);

export const Filter = () => {
  const dispatch = useDispatch();
  const { filterIsOpen } = useSelector((state: IState) => state.interface);



  return (
    <div className={ cx('filter', { 'filterOpen': filterIsOpen }) }>
      <div className={ style.filterList }>
        <BrandList />
        <Other />
        <Control />
      </div>
      <div
        className={ cx('filterSwitchButton', { 'filterSwitchButtonClose': filterIsOpen }) }
        onClick={ () => dispatch(openFilter()) }
      />
    </div>
  );
};