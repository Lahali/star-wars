import axios from "axios";
import React, { useContext, useState } from "react";

const shipContext = React.createContext();
const shipListContext = React.createContext();
const shipIdContext = React.createContext();

// hooks personalizados
export function useShipContext() {
  return useContext(shipContext);
}
export function useShipListContext() {
  return useContext(shipListContext);
}
export function useShipIdContext() {
  return useContext(shipIdContext);
}

export const ApiProvider = ({ children }) => {
  const [shipList, setShipList] = useState([]);

  const getShipList = () => {
    axios
      .get(`https://swapi.dev/api/starships/?page=1`)
      .then((response) => {
        setShipList(response.data.results);
      })
      .catch(() => console.log("la has liado"));
  };


  return (
    <div>
      <shipListContext.Provider value={shipList}>
        <shipContext.Provider value={getShipList}>
            {children}
        </shipContext.Provider>
      </shipListContext.Provider>
    </div>
  );
};
