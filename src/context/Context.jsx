// import section
import React, { createContext, useReducer } from "react";
import {reducer, initialState} from "../components/Reducer/Reducer"

// just as the name suggests, we're creating and exporting our createContext
export const movieContext = createContext();

// this is our ContextProvider component in which we use our useReducer function while destructuring our children coming from the App component
export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // here in our jsx we're wrapping our children around our movieContextProvider & we provide as our values the state and dispatch, which we take from the ContextProvider component function
  return (
    <div>
      <movieContext.Provider value={{ state, dispatch }}>
        {children}
      </movieContext.Provider>
    </div>
  );
}
