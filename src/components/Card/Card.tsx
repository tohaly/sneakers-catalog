import React from 'react';
import { ISneakers } from "../../service/api/sneakersApi";
import defaultImage from '../../images/default.jpg';
import style from './Card.module.css';
import {AppImage} from "../AppImage/AppImage";


export const Card = (props: (ISneakers)) => {
  const { title, media, brand, retailPrice } = props;

  return (
    <div className={ style.card }>
      {/*<img*/}
      {/*  src={ media.imageUrl || defaultImage }*/}
      {/*  alt="Sneaker"*/}
      {/*  className={ style.image }*/}
      {/*/>*/}
      <AppImage src={media.imageUrl || defaultImage} className={style.image} classNameLoaderWrapper={style.loader} />
      <h2 className={ style.title }>
        { title }
      </h2>
      <p className={ style.brand }>
        { brand }
      </p>
      <p className={ style.price }>{ `Price: ${ retailPrice } $` }</p>
    </div>
  );
};