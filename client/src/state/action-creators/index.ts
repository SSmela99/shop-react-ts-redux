import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";

import * as api from "../../api";

interface Product {
  id: number;
  count: number;
}

export const fetchProducts = () => async (dispatch: Dispatch<Action>) => {
  try {
    const { data } = await api.fetchProducts();

    dispatch({ type: ActionType.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCart = () => {
  return (dispatch: Dispatch<Action>) => {
    const cart = JSON.parse(localStorage.getItem("cart")!) || [];

    dispatch({
      type: ActionType.FETCH_CART,
      payload: cart,
    });
  };
};

export const addToCart = (product: Product) => {
  const cart = JSON.parse(localStorage.getItem("cart")!) || [];
  let exist = false;

  cart.forEach((x: Product) => {
    if (x.id === product.id) {
      x.count += 1;
      exist = true;
    }
  });

  if (!exist) {
    cart.push({ ...product, count: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.ADD_TO_CART, payload: product });
  };
};

export const removeFromCart = (product: Product) => {
  let cart = JSON.parse(localStorage.getItem("cart")!) || [];
  const exist = cart.find((x: Product) => x.id === product.id);

  const pos = cart.indexOf(exist);

  console.log(pos);
  if (exist.count === 1) {
    const newCart = cart.filter((x: Product) => x.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(newCart));
  } else {
    const newCart = cart.map((x: Product) =>
      x.id === product.id ? { ...exist, count: exist.count - 1 } : x
    );
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.REMOVE_FROM_CART, payload: cart });
  };
};

export const deleteFromCart = (product: Product) => {
  const cart = JSON.parse(localStorage.getItem("cart")!) || [];
  const newCart = cart.slice().filter((x: Product) => x.id !== product.id);

  localStorage.setItem("cart", JSON.stringify(newCart));
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.CLEAR_CART, payload: newCart });
  };
};
