import { Route, Routes } from "react-router-dom";

import StarshipCard from "./pages/StarshipCard";
import Main from "./pages/Main";
import { ApiProvider } from "./context/ApiProvider";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <>
      <ApiProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/starships" element={<Main />} />
            <Route path="/starships/:name/:id" element={<StarshipCard />} />
            <Route path="/starships/login" element={<Login />} />
            <Route path="/starships/signup" element={<SignUp />} />
          </Routes>
        </UserProvider>
      </ApiProvider>
    </>
  );
}

export default App;
