import { TodoItem } from "../models/todoItem";
import { v4 as uuidv4 } from "uuid";

// export const getItems = async (): Promise<TodoItem[]> => {
//   console.log("trying to get items");
//   return localStorage.items ? JSON.parse(localStorage.items) : [];
// };

export const getItems = (): TodoItem[] => {
  console.log("trying to get items");

  return [
    { id: "1", title: "Title 1", isCompleted: false },
    { id: "2", title: "Title 2", isCompleted: true },
    { id: "3", title: "Title 3", isCompleted: false },
  ];
};

export const getItem = async (id: string): Promise<TodoItem> => {
  let items = await getItems();
  let item = items.find((item: TodoItem) => item.id === id);

  if (!item) {
    throw new Error("Todo Item with such Id is not found");
  }

  return item;
};

export const addItem = async (item: TodoItem): Promise<void> => {
  let items = await getItems();
  item.id = uuidv4();
  item.createdAt = new Date();
  items.push(item);
  localStorage.todoItems = JSON.stringify(items);

  await saveDb(items);
};

export const updateItem = async (updatedItem: TodoItem): Promise<TodoItem> => {
  updatedItem.updatedAt = new Date();
  let items = await getItems();
  let itemIndex = items.findIndex((item: TodoItem) => item.id === updatedItem.id);
  items[itemIndex] = updatedItem;

  await saveDb(items);

  return updatedItem;
};

export const removeItem = async (id: string): Promise<void> => {
  console.log("Deleted inside service");

  let items = await getItems();
  let itemIndex = items.findIndex((item: TodoItem) => item.id === id);
  items.splice(itemIndex, 1);

  await saveDb(items);
};

export const saveDb = async (items: TodoItem[]): Promise<void> => {
  console.log("DB state:");
  console.table(items);

  localStorage.todoItems = JSON.stringify(items);
};
