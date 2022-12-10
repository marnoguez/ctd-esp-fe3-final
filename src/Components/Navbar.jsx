import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'



const Navbar = () => {
  const { state, dispatch} = useContext(ContextGlobal)
  console.log(state);
  return (
    <div className={styles.navbar_wrapper}>
      <nav
        className={styles.navbar}
        style={{
          backgroundColor: state.bgColor,
          color: state.ftColor,
          width: "100%",
          paddingRight: "180px",
          paddingLeft: "130px",
          
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: state.ftColor }}>
          <h1 style={{ fontSize: "40px", fontFamily: 'Georgia', }}>
            <span>D</span>H Odonto
          </h1>
        </Link>
        
        <ul>
          <li>
            <Link
              to="/"
              style={{
                color: state.ftColor,
                fontSize: "1.2rem",
                fontWeight: "bold",
                fontFamily: 'Georgia',
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                color: state.ftColor,
                fontSize: "1.2rem",
                fontWeight: "bold",
                fontFamily: 'Georgia',
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/favs"
              style={{
                color: state.ftColor,
                fontSize: "1.2rem",
                fontWeight: "bold",
                fontFamily: 'Georgia',
              }}
            >
              Favs
            </Link>
          </li>
          <li>
            <button
              className="dark"
              style={{
                backgroundColor: state.ftColor,
                color: state.bgColor,
                fontFamily: 'Georgia',
                
              }}
              onClick={() => {
                console.log(state.bgFlag);
                dispatch({ bgFlag: state.bgFlag });
              }}
            >
              {state.bgFlag === "DARK" ? "🔆" : "🌙"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
