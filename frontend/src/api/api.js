import axios from "axios";

const API = axios.create({ baseURL: "https://realtyengage-backend.onrender.com/api" });

export default API;
