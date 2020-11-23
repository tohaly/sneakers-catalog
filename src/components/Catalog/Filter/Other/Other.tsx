import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchImageFilter } from "../../../../redux/sneakers/actions";
import { IState } from "../../../../redux/rootReducer";
import style from './Other.module.css';

export const Other = () => {
  const dispatch = useDispatch();
  const { showWithImage } = useSelector((state: IState) => state.sneakers);

  return (
    <div className={ style.other }>
      <h2 className={ style.otherTitle }>Other</h2>
      <div className={ style.otherContent }>
        <label className={ style.otherLabel }>
          <input
            className={ style.otherCheckbox }
            name="image" type="checkbox"
            checked={ showWithImage }
            onChange={ (event => dispatch(switchImageFilter(event.target.checked))) }
          />
          <span className={ style.otherText }>Only with image</span>
        </label>
      </div>
    </div>
  );
};


