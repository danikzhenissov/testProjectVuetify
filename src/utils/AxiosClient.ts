import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://109.233.108.126:8010",
  headers: {
    "Content-Type": "application/json",
  },
});
