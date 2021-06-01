import { ActionTypes } from "../constants/actions-types";

const initialState = {
  products: [{ id: 1, title: "Udara", category: "developer" }],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCT:
      return state;
      break;
    default:
      return state;
  }
};
