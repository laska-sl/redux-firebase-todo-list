import { Reducer } from "redux";

const includeCompletedItemsReducer: Reducer = (state = false, action) => {
  switch (action.type) {
    case "INCLUDE":
      return true;
    case "EXCLUDE":
      return false;
    default:
      return false;
  }
};

export default includeCompletedItemsReducer;
