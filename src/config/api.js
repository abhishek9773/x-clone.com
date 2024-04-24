import axios from "axios";

export const API_BASE_URL = "http://localhost:5454";
const api = axios.create({
  baseUrl: API_BASE_URL,
  hearders: {
    Authorization: `Bearer${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
  },
});
