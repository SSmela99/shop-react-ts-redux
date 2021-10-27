import { ActionType } from "../action-types";

interface GetProducts {
  type: ActionType.FETCH_ALL;
  payload: number;
}

export type Action = GetProducts;
