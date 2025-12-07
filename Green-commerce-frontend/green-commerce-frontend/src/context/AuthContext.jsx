import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();



export const AuthProvider = ({children}) =>{
    const[user,setUser] = useState(null);
    const[role,setRole] = useState(null);

    useEffect(()=>
    {
        const  savedUser = localStorage.getItem("user");
        const savedRole = localStorage.getItem("role");
        
        if (savedUser) setUser(JSON.parse(savedUser));
        if (savedRole) setRole(savedRole);
    },[]);
return (
    <AuthContext.Provider value={{ user, setUser, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};
