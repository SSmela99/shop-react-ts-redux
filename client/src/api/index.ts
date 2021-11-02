import axios from "axios";

const productsUrl: string = "https://fakestoreapi.com/products";

export const fetchProducts = () => axios.get(productsUrl);
export const fetchProduct = (id: string) => axios.get(`${productsUrl}/${id}`);
