import axios from "axios";
const instance = axios.create({
    baseURL: "https://nodejs-rho-ten.vercel.app/api/",
    // baseURL: "http://localhost:8000/api",
});
export default instance