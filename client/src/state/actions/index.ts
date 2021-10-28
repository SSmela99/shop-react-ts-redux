import { ActionType } from "../action-types";
interface GetProducts {
  type: ActionType.FETCH_ALL;
  payload: object[];
}

export type Action = GetProducts;
