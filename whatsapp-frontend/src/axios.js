import axios from "axios";

const instance = axios.create({
    baseURL: "https://whatsapp-mern-x7.herokuapp.com/",
});

export default instance;