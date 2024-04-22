"use client";
import { createContext, useContext } from "react";
import { useState } from "react";
export const dataContext = createContext();

export function useDataContext() {
  return useContext(dataContext);
}

export function DataProvider(props) {
  const [dark, setDark] = useState(false);

  return (
    <dataContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
}
