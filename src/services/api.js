import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
  headers: {
    Accept: "application/json",
    "Cache-Control": "no-cache",
  },
  responseType: "json",
});

export default api;
