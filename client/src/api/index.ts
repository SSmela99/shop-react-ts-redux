import axios from "axios";

const productsUrl: string = "https://fakestoreapi.com/products";

export const fetchProducts = () => axios.get(productsUrl);
