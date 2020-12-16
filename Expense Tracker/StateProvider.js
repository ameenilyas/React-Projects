import React, { createContext, useContext, useReducer } from "react";

// Create Data Layer
const StateContext = createContext();

// Wrap the app in the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// to use Data layer in the app
export const useStateValue = () => useContext(StateContext);
