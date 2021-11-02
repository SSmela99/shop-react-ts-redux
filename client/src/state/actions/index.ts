import { ActionType } from "../action-types";
interface GetProducts {
  type: ActionType.FETCH_ALL;
  payload: object[];
}

interface getCart {
  type: ActionType.FETCH_CART;
  payload: [];
}

interface AddToCart {
  type: ActionType.ADD_TO_CART;
  payload: object;
}

export type Action = GetProducts | getCart | AddToCart;
