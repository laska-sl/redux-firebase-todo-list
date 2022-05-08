import { combineReducers } from "redux";

import includeCompletedItemsReducer from "./includeCompletedItems";
import isLoading from "./isLoading";

export default combineReducers({
  includeCompletedItemsReducer,
  isLoading,
});
