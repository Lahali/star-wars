import { useState, useEffect } from "react";
import axios from "axios";
import Starship from "../components/Starship";
import Header from "../components/Header";

const Main = () => {
  const [getShip, setGetShip] = useState([]);

  const getShipList = () =>
    axios
      .get(`https://swapi.dev/api/starships/?page=1`)
      .then((response) => {
        setGetShip(response.data.results);
      })
      .catch(() => {
        console.log("maaaaal");
      });

  useEffect(() => {
    getShipList();
  }, []);

  console.log(getShip);

  return (
    <div>
      <Header />
      <div className="p-4 mr-4 grid grid-rows-1 grid-cols-6">
        {getShip.map((item, index) => (
          <Starship
            key={index}
            getShipName={item.name}
            getShipModel={item.model}
            getShipUrl={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
