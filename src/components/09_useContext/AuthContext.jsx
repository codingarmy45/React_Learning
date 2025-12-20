import { createContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = (props) =>{
    const [names, setName] = useState('Yash');
    return(
        <AuthContext.Provider value={{names,setName}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;