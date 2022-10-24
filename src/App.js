import { Route, Routes, Redirect, Navigate } from "react-router-dom";

import StarshipCard from "./pages/StarshipCard";
import Main from "./pages/Main";
import { ApiProvider } from "./context/ApiProvider";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { UserProvider, useUserData } from "./context/UserProvider";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
 
  const {userLogged} = useUserData()

  return (
    <>
      <ApiProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/starships" element={userLogged === true ? <Main/> : <Navigate to="/login"/>}/>
            {/* <Route element={<ProtectedRoute />}>
              <Route path="/starships" element={<Main/>} />
            </Route>       */}
              <Route path="/starships/:name/:id" element={<StarshipCard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </UserProvider>
      </ApiProvider>
    </>
  );
}

export default App;
