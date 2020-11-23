import React from 'react';
import { filterSneakersByBrands } from "../../../../redux/sneakers/actions";
import { useDispatch } from "react-redux";
import style from './Control.module.css';

export const Control = () => {
  const dispatch = useDispatch();

  return (
    <div className={ style.control }>
      <button
        className={ style.applyFilterButton }
        onClick={ () => dispatch(filterSneakersByBrands()) }
      > Apply
      </button>
    </div>
  );
};