import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState: object[] = [];

const reducer = (state: object[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_ONE:
      return action.payload;
    case ActionType.FETCH_ALL:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
