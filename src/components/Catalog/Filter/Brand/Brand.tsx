import React, { ChangeEvent } from 'react';
import { useDispatch } from "react-redux";
import { brandsAddHandler } from "../../../../redux/sneakers/actions";
import style from './Brand.module.css';

interface IBrand {
  brand: string;
}

export const Brand = ({ brand }: IBrand) => {
  const dispatch = useDispatch();

  const addBrandHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    dispatch(brandsAddHandler(name, checked));
  };

  return (
    <div className={ style.brand }>
      <label className={ style.label }>
        <input
          className={ style.checkbox }
          type="checkbox"
          name={ brand }
          onChange={ addBrandHandler }
        />
        <span className={ style.text }>
          { brand }
        </span>
      </label>
    </div>
  );
};