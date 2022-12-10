import React, {useContext} from "react";
import logo from "./DH.png";
import { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const { state } = useContext(ContextGlobal)
  return (
    <><div style={{marginTop: '2rem', backgroundColor: "red", display: "block", padding: "0.5rem", textAlign: "center", cursor: "pointer" }}>
      <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        BACK TO TOP
      </p>
    </div>
    <footer
      style={{
        display: "flex",
        marginTop: 'auto',
        left: "0",
        // bottom: "-70px",
        width: '100%',
        height: '40px',
        justifyContent: "space-between",
        alignItems: "center",
        // position: 'absolute',
        bottom: '0',
        padding: "50px",
        width: "90vw",
      }}>
        <div style={{ display: "flex", alignItems: "center", marginLeft: "50px" }}>
          <p>Powered by</p>
          <img src={logo} alt="DH-logo" style={{ width: "300px", filter: state.bgFlag === "DARK" ? "invert(100%)" : null }} />
        </div>
        <div style={{ width: "200px", display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "center" }}>
          <img src="../Images/ico-facebook.png" alt="facebook" style={{ width: "40px", filter: state.bgFlag === "DARK" ? null : "invert(100%)" }} />
          <img src="../Images/ico-instagram.png" alt="instagram" style={{ width: "40px", filter: state.bgFlag === "DARK" ? null : "invert(100%)" }} />
          <img src="../Images/ico-whatsapp.png" alt="whatsapp" style={{ width: "40px", filter: state.bgFlag === "DARK" ? null : "invert(100%)" }} />
          <img src="../Images/ico-tiktok.png" alt="tiktok" style={{ width: "40px", filter: state.bgFlag === "DARK" ? null : "invert(100%)" }} />
        </div>

      </footer></>
  );
};

export default Footer;
