export interface TodoItem {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
