import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"

const useAuth = _ => {
    return useContext(AuthContext);
};

export default useAuth;