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

export const fetchProduct =
  (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await api.fetchProduct(id);

      dispatch({ type: ActionType.FETCH_ONE, payload: data });
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
