import axios from "axios";

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
  ({ response: { status, data } }) => {
    return Promise.reject({ status, data });
  }
);

export default instance;
