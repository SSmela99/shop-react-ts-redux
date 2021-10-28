import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";

import * as api from "../../api";

export const getProducts = (products: object[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_ALL,
      payload: products,
    });
  };
};

export const fetchProducts = () => async (dispatch: Dispatch<Action>) => {
  try {
    const { data } = await api.fetchProducts();

    dispatch({ type: ActionType.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
