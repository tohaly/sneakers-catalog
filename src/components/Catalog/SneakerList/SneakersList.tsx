import React, {useState} from 'react';
import { useSelector } from "react-redux";
import { IState } from "../../../redux/rootReducer";
import { Card } from "../../Card";
import style from './SneakersList.module.css';


export const SneakersList = () => {
  const { filteredList } = useSelector((state: IState) => state.sneakers);
  const [limit, setLimit] = useState(10)



  return (
    <>
      <div className={ style.sneakerList }>
        { filteredList.map((sneaker, index) => {
          if(limit > index){
            return <Card key={ sneaker.id } { ...sneaker } />;
          }

          return null
        }) }
      </div>
      {limit < filteredList.length && <button onClick={() => setLimit(limit + 8)} className={style.button}>More</button>}
    </>
  );
};