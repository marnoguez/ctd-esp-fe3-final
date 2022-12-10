import React, { useState, useEffect, useContext } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { ContextGlobal } from "../Components/utils/global.context";
import styles from "./Home.module.css";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

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
      <h1 style= {{fontSize: '1.5rem',
  textAlign: 'center',
  padding: '0.4rem',}}>Home</h1>
      <div className={styles.cardgrid} style={{backgroundColor: state.bgColor, color: state.ftColor, 
  
  }}>
        {/* Aqui deberias renderizar las cards */}

        {odontologos.map((odontologo) => {
          return <Card odontologo={odontologo} key={odontologo.id} />;
        })}
      </div>
      
      
          
    </main>
  );
};

export default Home;
