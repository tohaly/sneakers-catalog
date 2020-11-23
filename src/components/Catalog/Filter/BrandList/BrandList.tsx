import React from 'react';
import { brands } from "./brands";
import { Brand } from "../Brand";
import style from "./BrandList.module.css";

export const BrandList = () => {
  return (
    <div className={ style.brandList }>
      <h2 className={ style.brandListTitle }>Brands</h2>
      <div className={ style.brandListContainer }>
        { brands.map(brand =>
          <Brand
            key={ brand }
            brand={ brand }
          />) }
      </div>
    </div>
  );
};