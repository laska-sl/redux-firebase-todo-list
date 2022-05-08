import { TodoItem } from "../../models/todoItem";
import { AddItemAction } from "../actionTypes/todoActionTypes";

export const addItem = (item: TodoItem): AddItemAction => ({
  type: "ADD_ITEM",
  item: item,
});
