import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE
});

export const Login = (username, password) => {
  API.post("token/", { username, password })
  };

export default API;