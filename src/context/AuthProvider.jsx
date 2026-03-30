import { useState } from "react"
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => {
    const [lang, setLang] = useState();

    return (
        <AuthContext.Provider value={{lang, setLang}}>
            {children}
        </AuthContext.Provider>
    )
}