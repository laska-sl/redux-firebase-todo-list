import { Action, Reducer } from "redux";

const isPageLoadingReducer: Reducer = (state, action: Action) => {
  switch (action.type) {
    case "LOADING":
      return true;
    case "LOADED":
      return false;
    default:
      return false;
  }
};

export default isPageLoadingReducer;
