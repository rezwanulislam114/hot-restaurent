import { useContext } from "react"
import { authContext } from "../components/AuthProvider/AuthProvider"

const useAuth = () => {
    return useContext(authContext)
}

export default useAuth;