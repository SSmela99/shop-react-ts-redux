import axios from "axios";

const productsUrl: string = "https://fakestoreapi.com/products";

export const fetchProducts = () => axios.get(productsUrl);
export const fetchProduct = (id: string) => axios.get(`${productsUrl}/${id}`);

const loginUrl: string = "https://backend-for-shop.herokuapp.com/signin";

export const signInUser = (user: object) => axios.post(loginUrl, user);

const registerUrl: string = "https://backend-for-shop.herokuapp.com/register";

export const registerUser = (user: object) => axios.post(registerUrl, user);
