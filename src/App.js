import { useState, useEffect } from "react";
import axios from "axios";
import Starship from "./components/Starship";
import Header from "./components/Header";


function App() {
  const [getShip, setGetShip] = useState([]);

  const getShipName = () =>
    axios
      .get(`https://swapi.dev/api/starships/?page=1`)
      .then((response) => {
        setGetShip(response.data.results);
      })
      .catch(() => {
        console.log("maaaaal");
      });

  useEffect(() => {
    getShipName();
  }, []);

  console.log(getShip);

  return (
    <>
      <Header/>
      {getShip.map((item, index) => (
        <Starship
          key={index}
          getShipName={item.name}
          getShipModel={item.model}
        />
      ))}
    </>
  );
}

export default App;
