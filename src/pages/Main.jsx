import { useEffect } from "react";
import Starship from "../components/Starship";
import Header from "../components/Header";
import { useCurrentPage, useFilteredShips, usePageContext, useShipContext, useShipListContext } from "../context/ApiProvider";
import { useParams } from "react-router-dom";

const Main = () => {

  const shipList = useShipListContext();
  const getShipList = useShipContext();
  const changeNumberPage = usePageContext()
  const currentPage = useCurrentPage()

  useEffect(() => {
    getShipList();
  }, []);

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
      <button onClick={changeNumberPage}>más naves</button>
      </div>
    </div>
  );
};

export default Main;
