import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const shipContext = React.createContext();
const shipListContext = React.createContext();

export function useShipContext() {
  return useContext(shipContext);
}

export function useShipListContext() {
  return useContext(shipListContext);
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

  // useEffect(() => {
  //     getShipList()
  // }, [])

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
