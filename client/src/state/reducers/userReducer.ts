import { ActionType } from "src/state/action-types";
import { Action } from "src/state/actions/index";

const initialState: object = {};

const reducer = (state: object = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SIGN_IN:
      return action.payload;
    case ActionType.LOGOUT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
