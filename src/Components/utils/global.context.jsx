import { createContext, useReducer, useMemo,} from "react";


const reducerFunction = (state, { bgFlag }) => { 
  switch (bgFlag) {
    case "DARK":
      return {
        bgFlag: "LIGHT", 
        bgColor: "#fffbf2", 
        ftColor: "#1e1e1e"
      }
    case "LIGHT":
      return {
        bgFlag: "DARK",
        bgColor: "#07031a",
        ftColor: "#FFFFFF",
        
        
      }
    default:
      return state;
  }
}

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  

const initialState = { 
  bgFlag: "LIGHT",
  bgColor: "#fffbf2",
  ftColor: "#000000"

};

const [state, dispatch] = useReducer(reducerFunction, initialState); 

const providerValue = useMemo(()=>({
  state, 
  dispatch 
}),[state])


  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );


};



export default ContextProvider;
