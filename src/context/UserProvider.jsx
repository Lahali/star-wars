import React, { useContext, useState, useEffect } from "react";

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
    setUser({
      ...user,
      email: e.target.value,
    });
  };
  const handlePassChange = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if([user.email, user.password].includes('')) {
      return alert("Todos los datos son obligatorios")
    }
    // con esta línea vaciamos de vuelta los inputs
    setUser({ email: "", password: "" });
    setUserArray([...userArray, user]);
    saveUsers(userArray);
  };

  console.log(userArray);

  const saveUsers = (totalUsers) => {
    localStorage.setItem("users", JSON.stringify(totalUsers));
  };
  useEffect(() => {}, [userArray]);

  // datos a consumir
  const getSavedUsers = () => {
    const newUser = JSON.stringify(localStorage.getItem("user"))
    newUser && setUser(newUser)
  }
  // useEffect(() => {
  //   getSavedUsers()
  // }, [])


  return (
    <div>
      <userContext.Provider
        value={{
          handleMailChange,
          handlePassChange,
          handleSubmit,
          getSavedUsers,
          user
        }}
      >
        {children}
      </userContext.Provider>
    </div>
  );
};
