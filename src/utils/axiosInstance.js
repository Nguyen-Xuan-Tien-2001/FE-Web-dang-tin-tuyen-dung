import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://be-fiverr.onrender.com/",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export default httpClient;