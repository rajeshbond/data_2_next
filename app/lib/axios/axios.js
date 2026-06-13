import axios from "axios";

export const api = axios.create({
  baseURL: "https://data2-3pkw.onrender.com/",
  headers:{
    "Content-Type":"application/json"
  }
});