import { ActionType } from "../action-types";

interface GetProducts {
  type: ActionType.FETCH_ALL;
  payload: object[];
}

interface getCart {
  type: ActionType.FETCH_CART;
  payload: object[];
}

interface AddToCart {
  type: ActionType.ADD_TO_CART;
  payload: object;
}

interface RemoveFromCart {
  type: ActionType.REMOVE_FROM_CART;
  payload: object;
}

interface ClearCart {
  type: ActionType.CLEAR_CART;
  payload: object;
}

interface SignIn {
  type: ActionType.SIGN_IN;
  payload: object;
}

interface Logout {
  type: ActionType.LOGOUT;
  payload: object;
}

export type Action =
  | GetProducts
  | getCart
  | AddToCart
  | RemoveFromCart
  | ClearCart
  | SignIn
  | Logout;
