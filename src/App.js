import { Route, Routes } from "react-router-dom";
import StarshipCard from "./components/StarshipCard";
import Main from "./pages/Main";

function App() {

  return (
    <>
      <Routes>
        {/* la primera parte de la ruta llamará al welcome */}
        <Route path="/" element={<Main/>}/> 
        <Route path="/starships" element={<Main/>}/>
        <Route path="/starships/:id" element={<StarshipCard/>}/>
      </Routes>
      
    </>
  );
}

export default App;
