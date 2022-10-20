import { useContext, useEffect } from "react";
import Starship from "../components/Starship";
import Header from "../components/Header";
import { useGetData } from "../context/ApiProvider";

const Main = () => {
  const { shipList, getShipList, changeNumberPage, page } = useGetData();

  useEffect(() => {
    getShipList();
  }, [page]);

  return (
    <div>
      <Header />
      <div className="p-4 mr-4 grid grid-rows-1 grid-cols-6">
        {shipList.map((item, index) => (
          <Starship
            key={index}
            getShipName={item.name}
            getShipModel={item.model}
            getShipUrl={item.url}
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
  );
};

export default Main;
