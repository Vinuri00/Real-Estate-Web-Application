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

// Lawyers
export const GET_ALL_LAWYERS = "/lawyers/get-all"; // lawyer: get all lawyers
export const DELETE_LAWYER_BY_ID_URL = "/lawyers/delete"; // lawyer: delete lawyer
export const APPROVE_LAWYER = "/lawyers/approve"; // lawyer: delete lawyer
export const REJECT_LAWYER = "/lawyers/reject"; // lawyer: delete lawyer

// Advertisement
export const GET_ALL_ADVERTISEMENTS = "/advertisements/get-all"; // advertisement: get all advertisements
export const APPROVE_ADVERTISEMENT = "/advertisements/approve"; // advertisement: approve advertisement
export const REJECT_ADVERTISEMENT = "/advertisements/reject"; // advertisement: reject advertisement
/*export const DELETE_ADVERTISEMENT = "/advertisement/delete"; // advertisement: delete advertisement*/  

// Payment
export const GET_PAYMENTS = "/payment";

export default axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});
