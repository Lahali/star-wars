import React, { useContext, useState } from 'react'

const modalContext = React.createContext()

export function useModalContext() {
    return useContext(modalContext)
}

export const ModalProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen ] = useState(false);


    const changeModal = (event) => {
        event.preventDefault();
        setIsModalOpen(!isModalOpen);
      };

    

  return (
    <div>
        <modalContext.Provider value={{isModalOpen, setIsModalOpen, changeModal}}>
            {children}
        </modalContext.Provider>
    </div>
  )
}

