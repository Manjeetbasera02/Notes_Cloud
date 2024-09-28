import { createContext, useState } from "react";

const usercontext = createContext("")

const Contextprovider = ({children}) => {
    const [user, setuser] = useState(localStorage.getItem('token') || null)
    return (
        <usercontext.Provider value={{user, setuser}}>
            {children}
        </usercontext.Provider>
    )
}

export { usercontext, Contextprovider };