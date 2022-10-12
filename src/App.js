import { Route, Routes } from "react-router-dom";

import StarshipCard from "./pages/StarshipCard";
import Main from "./pages/Main";
import { ApiProvider } from "./context/ApiProvider";

function App() {
  return (
    <>
      <ApiProvider>
        <Routes>
          {/* la primera parte de la ruta llamará al welcome */}
          <Route path="/" element={<Main />} />
          <Route path="/starships" element={<Main />} />
          <Route path="/starships/:id" element={<StarshipCard />} />
        </Routes>
      </ApiProvider>
    </>
  );
}

export default App;
