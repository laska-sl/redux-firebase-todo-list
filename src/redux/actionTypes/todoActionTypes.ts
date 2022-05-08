import { Action } from "redux";
import { TodoItem } from "../../models/todoItem";

export interface AddItemAction extends Action {
  item: TodoItem;
}

export interface DeleteItemAction extends Action {
  id: string;
}

export interface GetItemAction extends Action {
  id: string;
}

export interface GetItemsAction extends Action {}

export interface UpdateItemAction extends Action {
  item: TodoItem;
}
