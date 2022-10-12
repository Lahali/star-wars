import axios from "axios";
import React, { useContext, useState } from "react";

const shipContext = React.createContext();
const shipListContext = React.createContext();
const shipIdContext = React.createContext();
const pageContext = React.createContext();
const currentPageContext = React.createContext();


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
export function usePageContext() {
  return useContext(pageContext);
}
export function useCurrentPage() {
  return useContext(currentPageContext);
}

export const ApiProvider = ({ children }) => {
  const [shipList, setShipList] = useState([]);
  const [page, setPage] = useState(1);

  const changeNumberPage = () => {
    setPage(page + 1);
  };

  const getShipList = () => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((response) => {
        setShipList(response.data.results);
      })
      .catch(() => console.log("la has liado"));
  };

  return (
    <div>
      <shipListContext.Provider value={shipList}>
        <shipContext.Provider value={getShipList}>
          <pageContext.Provider value={changeNumberPage}>
            
            <currentPageContext.Provider value={page}>
              {children}
            </currentPageContext.Provider>
            
          </pageContext.Provider>
        </shipContext.Provider>
      </shipListContext.Provider>
    </div>
  );
};
