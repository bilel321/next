import  Axios  from "axios";

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    Headers: {
        "X-Rquested-With":"XMLHttpRequest"
    },
    //withCredentials:true
});
export default axios ;