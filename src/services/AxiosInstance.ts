import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.pokemontcg.io/v2",
  withCredentials: false,
  headers: {
    "X-Api-Key": process.env.API_KEY || "",
  },
});

export default axiosInstance;
