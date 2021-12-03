import axios from "axios";

const { API_URL, AEROLAB_CHALLENGE_TOKEN } = process.env;

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${AEROLAB_CHALLENGE_TOKEN}`;

export const getUserData = () => {
  return axios.get("/user/me");
};
