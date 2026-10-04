import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:3000/api"
      : "https://connecto-backend-1-v0b3.onrender.com/api",
  withCredentials: true,
});
