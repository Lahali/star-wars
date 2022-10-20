import axios from "axios";
import React, { useContext, useState } from "react";

const dataContext = React.createContext();

// hook personalizado
export function useGetData() {
  return useContext(dataContext);
}

export const ApiProvider = ({ children }) => {
  const [shipList, setShipList] = useState([]);
  const [page, setPage] = useState(1);


  const changeNumberPage = (action) => {
    action === "increase" ? setPage(page + 1) : setPage(page - 1);
    if (page < 1 || page > 5) return;
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
      <dataContext.Provider
        value={{ shipList, getShipList, changeNumberPage, page }}
      >
        {children}
      </dataContext.Provider>
    </div>
  );
};
