import axios from "axios";

export const COUNTS_URL = "/reservations/count";

// Admins
export const LOGIN_URL = "/admins/login";
export const ADMIN_PROTECTED_URL = "/admins/protected";

// Brokers
export const CREATE_NEW_BROKER_URL = "/brokers/new"; // broker: add new broker
export const GET_ONE_BROKER = "/brokers/get-one"; // broker: get one broker
export const GET_ALL_BROKERS = "/brokers/get-all"; // broker: get all brokers
export const UPDATE_BROKER_BY_ID_URL = "/brokers/update"; // broker: update broker
export const DELETE_BROKER_BY_ID_URL = "/brokers/delete" // broker: delete broker
export const LAWYER_LOGIN = "/lawyers/login" // broker: delete broker
export const GET_BOOKINGS_BY_LAWYERID = "/booklawyer/get-one" // broker: delete broker

// Payment
export const GET_PAYMENTS = "/payment";

export default axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});
