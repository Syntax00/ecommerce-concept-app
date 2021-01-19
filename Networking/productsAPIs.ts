import axios from "./axiosInstance";

const PRODUCTS_APIS = {
  getAllProducts: (filter: { sort: string; limit: number }) =>
    axios.get("/products", {
      params: filter,
    }),
};

export default PRODUCTS_APIS;
