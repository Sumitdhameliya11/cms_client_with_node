import axios from "axios";
import Cookies from 'js-cookie';
// const token  = Cookies.get("token");
const AxiosInstance  = axios.create({
    // baseURL:'http://localhost:4000/',
    baseURL:'https://cms-node-f3gn.onrender.com/',
    headers: {
        authorization: `Bearer  ${Cookies.get("token")}`
    },
})

export default AxiosInstance;