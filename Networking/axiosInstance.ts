import axios from "axios";
import _get from "lodash/get";

const instance = axios.create({
  baseURL: `https://fakestoreapi.com`,
  withCredentials: true,
});

instance.interceptors.request.use(async (config) => ({
  ...config,
  headers: {
    ...config.headers,
  },
}));

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const status = _get(error, "response.status");
    const data = _get(error, "response.data");

    return Promise.reject({ status, data, message: error.message });
  }
);

export default instance;
