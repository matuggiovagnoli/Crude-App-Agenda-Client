import React, { useState } from "react";

const AgendaContext = React.createContext();

export const CustomAgendaContext = ({children}) => {
    //Agregar info a compartir
    const [userLogged, setUserLogged] = useState({})

    const getUser = (user) => {
        setUserLogged(user)
    }


    return(
        <AgendaContext.Provider value={{getUser, userLogged}}>
            {children}
        </AgendaContext.Provider>
    )
}