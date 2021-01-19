import axios from "./axiosInstance";

const CATEGORIES_APIS = {
  getAllCategories: () => axios.get("/products/categories"),
};

export default CATEGORIES_APIS;
