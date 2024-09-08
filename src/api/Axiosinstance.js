import axios from "axios";
import Cookies from 'js-cookie';
const token  = Cookies.get("token");
const AxiosInstance  = axios.create({
    baseURL:'http://localhost:4000/',
    headers: {
        authorization: `Bearer  ${token}`
    },
})

export default AxiosInstance;