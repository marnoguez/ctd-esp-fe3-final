import { createContext, useReducer, useMemo,} from "react";
//hacer una funcion para modo claro, 

const reducerFunction = (state, { bgFlag }) => { //siempre lleva dos parametros, y adentro dun switch que mira al type
  switch (bgFlag) {
    case "DARK":
      return {
        bgFlag: "LIGHT", //type
        bgColor: "#fffbf2", 
        ftColor: "#1e1e1e"
      }
    case "LIGHT":
      return {
        bgFlag: "DARK",
        bgColor: "#07031a",
        ftColor: "#FFFFFF",
        // btColor: "#07031a"
        
      }
    default:
      return state;
  }
}

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

const initialState = { // esto va a ser alguno de los dos de arriba, el que yo quiera que sea
//este es el estado incial de mi state, en clarito
  bgFlag: "LIGHT",
  bgColor: "#fffbf2",
  ftColor: "#000000"

};

const [state, dispatch] = useReducer(reducerFunction, initialState); // useReducer es para state complejos, lleva dos parametro. Fucnion que detemrina como cambia el 
// estado

const providerValue = useMemo(()=>({
  state, //props
  dispatch //props que le paso a mi app
}),[state])


  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );


};



export default ContextProvider;
