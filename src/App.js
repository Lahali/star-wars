import { Navigate, Route, Routes } from "react-router-dom";
import PlanetCard from "./pages/PlanetCard";
import StarshipCard from "./pages/StarshipCard";
import MainStarships from "./pages/MainStarships";
import { ApiProvider } from "./context/ApiProvider";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { UserProvider, useUserData } from "./context/UserProvider";
import MainPlanets from "./pages/MainPlanets";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
 const {userLogged} = useUserData()

  return (
    <>
      <ApiProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Welcome />} />
            {/* <Route path="/starships" element={userLogged ? <MainStarships/> : <Navigate to="/login"/>}/>   */}
            <Route path="/starships" element={<MainStarships/>} />
            <Route path="/planets" element={<MainPlanets/>}/>
            <Route path="/:name/:id" element={<StarshipCard />} />
            <Route path="/p/:name/:id" element={<PlanetCard/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </UserProvider>
      </ApiProvider>
    </>
  );
}

export default App;
