import axios from "axios";
import _get from "lodash/get";

import { resolveNetworkError } from "../utilities/helpers";

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
  (error) => Promise.reject(resolveNetworkError(error))
);

export default instance;
