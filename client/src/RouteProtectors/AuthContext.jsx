/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {


    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
      });
    

    useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } 
    else {
      localStorage.removeItem("user");
    }
    }, [user]);

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem("user",userData)
    }

    const logOut = () => {
        setUser(null)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider value={{user , login , logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}