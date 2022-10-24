import React, {useEffect} from 'react'
import { useGetData } from '../context/ApiProvider';
import Planets from '../components/Planets';
import Header from '../components/Header';

const MainPlanets = () => {

    const { planetList, getPlanetList, changeNumberPage, page } = useGetData();

    useEffect(() => {
      getPlanetList();
    }, [page]);

  return (
    <div>
    <Header />
    <div className="p-4 mr-4 grid grid-rows-1 grid-cols-6">
      {planetList.map((item, index) => (
        <Planets
          key={index}
          getPlanetName={item.name}
          getPlanetTerrain={item.terrain}
          getPlanetClimate={item.climate}
          getPlanetUrl={item.url}
        />
     ))}
    </div>
    <div className="flex justify-around  content-center">
      <button
        className="w-28 rounded-sm border-2 text-zinc-400 border-zinc-400 hover:text-white p-3 m-5 "
        onClick={() => changeNumberPage("decrease")}
      >
        go back
      </button>
      <button
        className="w-28 rounded-sm border-2 text-zinc-400 border-zinc-400 hover:text-white p-3 m-5 border-1"

        onClick={() => changeNumberPage("increase")}
      >
        view more
      </button>
    </div>
  </div>
  )
}

export default MainPlanets