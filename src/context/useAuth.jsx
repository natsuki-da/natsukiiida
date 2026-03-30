import { createContext } from "node:vm"
import { AuthContext } from "./AuthContext";

export const useAuth = () => {
    const context = createContext(AuthContext);
    if (!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}