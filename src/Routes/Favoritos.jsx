import React, { useState } from "react";
import Card from "../Components/Card";
import getFavsStore from "../Components/utils/getFavsStore";
import styles from "./Home.module.css";



const Favoritos = () => {
  const [favsPageItems, setFavsPageItems] = useState(getFavsStore());

  return (
    <>
      <div style= {{minHeight: '68vh',}}>
      <h1>Dentists Favs</h1>
      <div className={styles.cardgrid}>
        
        {favsPageItems.map(fav => <Card odontologo={fav} key={fav.id} setFavsPageItems={setFavsPageItems} />)}
      </div>
      </div>
    </>
  );
};

export default Favoritos;
