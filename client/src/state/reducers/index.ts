import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
