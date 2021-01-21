import axios from "./axiosInstance";

const USER_APIS = {
  getCurrentUser: () => axios.get("/users/1"),
};

export default USER_APIS;
