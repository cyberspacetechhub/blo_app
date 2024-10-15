
import useAuth from "./useAuth";
import axios from "../api/axios";

const useRefreshToken = async () => {
    const {auth, setAuth} = useAuth()

    const refresh = async () => {
        const response = await axios.get('refresh', {
            headers: {
                Authorization: `Bearer ${auth?.refreshToken}`
            }
        })
        console.log(response.data.token)
        setAuth(response.data)
        return response.data.token
    }
    return refresh
}

export default useRefreshToken;