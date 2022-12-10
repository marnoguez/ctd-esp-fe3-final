import React, { useState, useEffect, useContext } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { ContextGlobal } from "../Components/utils/global.context";
import styles from "./Home.module.css";




const Home = () => {
  const [odontologos, setOdontologos] = useState([]);
  const { state, dispatch} = useContext(ContextGlobal)


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setOdontologos(res.data));

    const favsJson = localStorage.getItem('favs');
    if (!favsJson) {
      localStorage.setItem('favs', JSON.stringify([]));
    }
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <div className={styles.cardgrid} style={{backgroundColor: state.bgColor, color: state.ftColor, 
  
  }}>
        

        {odontologos.map((odontologo) => {
          return <Card odontologo={odontologo} key={odontologo.id} />;
        })}
      </div>
      
      
          
    </main>
  );
};

export default Home;
