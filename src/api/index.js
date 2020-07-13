import axios from "axios";

export const api = () => {
  const apiUrl = "https://api.themoviedb.org/3/";

  const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-type": "application/json",
    },
  });

  return axiosInstance;
};
