import axios from "axios";

const productsUrl: string = "https://fakestoreapi.com/products";

export const fetchProducts = () => axios.get(productsUrl);
export const fetchProduct = (id: string) => axios.get(`${productsUrl}/${id}`);

const loginUrl: string = "http://localhost:5000/signin";

export const signInUser = (user: object) => axios.post(loginUrl, user);

const registerUrl: string = "http://localhost:5000/register";

export const registerUser = (user: object) => axios.post(registerUrl, user);
