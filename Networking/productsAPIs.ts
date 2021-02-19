import axios from "./axiosInstance";

const PRODUCTS_APIS = {
  getAllProducts: (filter: { sort: string; limit: number }) =>
    axios.get("/products", {
      params: filter,
    }),
  getProductsByCategory: (categoryName: string) =>
    axios.get(`/products/category/${categoryName}`),
  getProduct: (id: string) => axios.get(`/products/${id}`),
};

export default PRODUCTS_APIS;
