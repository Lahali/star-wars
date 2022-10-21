import React, { useContext, useEffect, useState } from 'react'

// const modalContext = React.createContext()

// export function useModalContext() {
//     return useContext(modalContext)
// }

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const [newUser, setNewUser] = useState([])





const handleSubmit = (event) =>{
    event.preventDefault()
    if([email, password].includes('')) {
        return alert("Es obligatorio rellenar todos los campos")
    }
    setUser({
        email: '',
        password:''
    })
    usersSaved(newUser)
    setNewUser([...newUser])
}

const usersSaved = (allUsers) => {
    localStorage.setItem("users", JSON.stringify(allUsers))
}
useEffect(() => {}, [user])



    

  return (
    <div>
  
    </div>
  )
}

