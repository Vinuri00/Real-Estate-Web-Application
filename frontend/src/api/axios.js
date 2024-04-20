import axios from "axios";

export const CREATE_ADVERTISEMENTS = "/advertisements/create";
export const LAWYERS_REGISTER = "/lawyers/register";
export const LOGIN_URL = "/lawyers/login";
export const USER_REGISTER = "/users/register";

export default axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});
