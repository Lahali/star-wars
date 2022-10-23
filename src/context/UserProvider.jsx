import React, { useContext, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Login from "../pages/Login";

const userContext = React.createContext();

export function useUserData() {
  return useContext(userContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userArray, setUserArray] = useState([]);

  const handleMailChange = (e) => {
    e.preventDefault()
    setUser({
      ...user,
      email: e.target.value,
    });
  };
  const handlePassChange = (e) => {
    e.preventDefault()
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const verifyInputs = () => {
    if ([user.email, user.password].includes("")) {
      return alert("Todos los datos son obligatorios");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyInputs();
    // con esta línea vaciamos de vuelta los inputs
    setUser({ email: "", password: "" });
    setUserArray([...userArray, user]);
    saveUsers(userArray);
    console.log(userArray);
  };

  // const findUser = userArray.map((item) => {
  //  if ( item.email === user.email && item.password === user.password) {
  //  setUserExists(true)
  //   console.log("hey");
  //  }
  // });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    verifyInputs();
    userArray.map((item) => {
      if (item.email === user.email && item.password === user.password) {
        return console.log("eeeeooo");
        //  setUserExists(!userExists)
        //  return console.log(userExists, "existo")
        // return <Navigate to="/starships"/>
      } else {
        return alert("algo no coincide");
      }
    });
  };

  

  const saveUsers = (totalUsers) => {
    localStorage.setItem("users", JSON.stringify(totalUsers));
  };
  useEffect(() => {}, [userArray]);

  // datos a consumir
  const getSavedUsers = () => {
    const newUser = JSON.stringify(localStorage.getItem("user"));
    newUser && setUser(newUser);
  };
  useEffect(() => {
    getSavedUsers();
  }, []);

  return (
    <div>
      <userContext.Provider
        value={{
          handleMailChange,
          handlePassChange,
          handleSubmit,
          getSavedUsers,
          handleLoginSubmit,
          user,
          userArray,
        }}
      >
        {children}
      </userContext.Provider>
    </div>
  );
};
