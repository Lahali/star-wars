import { Route, Routes, Redirect } from "react-router-dom";

import StarshipCard from "./pages/StarshipCard";
import Main from "./pages/Main";
import { ApiProvider } from "./context/ApiProvider";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { UserProvider } from "./context/UserProvider";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <ApiProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Welcome />} />
            {/* <Route element={<ProtectedRoute />}> */}
              <Route path="/starships" element={<Main />} />
              <Route path="/starships/:name/:id" element={<StarshipCard />} />
            {/* </Route> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </UserProvider>
      </ApiProvider>
    </>
  );
}

export default App;
