import axios from "axios";

export const CREATE_ADVERTISEMENTS = "/advertisements/create";
// export const REGISTER_URL = "/lawyers/register";

export default axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});
