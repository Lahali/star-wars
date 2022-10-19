import { Route, Routes } from "react-router-dom";

import StarshipCard from "./pages/StarshipCard";
import Main from "./pages/Main";
import { ApiProvider } from "./context/ApiProvider";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <ApiProvider>
        <Routes>
          {/* la primera parte de la ruta llamará al welcome */}
          <Route path="/" element={<Welcome />} />
          <Route path="/starships" element={<Main />} />
          <Route path="/starships/:name/:id" element={<StarshipCard/>} />
          <Route path="/starships/login" element={<Login/>} />
        </Routes>
      </ApiProvider>
    </>
  );
}

export default App;
