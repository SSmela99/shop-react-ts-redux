import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState: [] = [];

const reducer = (cart: [] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_CART:
      return action.payload;
    case ActionType.ADD_TO_CART:
      return [...cart, action.payload];
    case ActionType.REMOVE_FROM_CART:
      return [...cart, action.payload];
    case ActionType.CLEAR_CART:
      return [...cart, action.payload];
    default:
      return cart;
  }
};

export default reducer;
