import React, { useState, useEffect } from "react";
import axios from "axios";

const Starship = () => {

  const [getShip, setGetShip] = useState([]);

 
  const getShipName = () =>  axios
    .get(`https://swapi.dev/api/starships/?page=1`)
    .then((response) => {
      setGetShip(response.data.results);
    })
    .catch(() => {
      console.log("maaaaal");
    });

  useEffect(() => {
    getShipName()
  }, []);


  console.log(getShip);

  return (
    <div>
      <p>hello</p>
    </div>
  );
};

export default Starship;
