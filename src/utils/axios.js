import axios from "axios";
import { session } from ".";

const ENDPOINT = "https://d31mp7dmwh32b5.cloudfront.net/api";
// const ENDPOINT = "http://localhost:8080/api";

const axiosInstance = axios.create({
  baseURL: ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (response) => {
    const token = await session.getData("jwt");
    response.headers.authorization = token ? `Bearer ${token}` : "";
    return response;
  },
  (error) => Promise.reject(error?.response)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
