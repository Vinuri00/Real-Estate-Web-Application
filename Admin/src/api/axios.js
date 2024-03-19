import axios from "axios";

export const LOGIN_URL = "/admins/login";
export const ADMIN_PROTECTED_URL = "/admins/protected";
export const COUNTS_URL = "/reservations/count";
export const CREATE_NEW_BROKER_URL = "/brokers/new"; // broker: add new broker
export const GET_ONE_BROKER = "/brokers/get-one"; // broker: get one broker
export const GET_ALL_BROKERS = "/brokers/get-all"; // broker: get all brokers
export const UPDATE_BROKER_BY_ID_URL = "/brokers/update"; // broker: update broker
export const GET_ALL_LAWYERS = "/lawyers/get-all";
export const DELETE_BROKER_BY_ID_URL = "/brokers/delete"
export const GET_PAYMENTS = "/payment";

export default axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});
