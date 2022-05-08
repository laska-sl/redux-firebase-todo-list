import { Button, TextField } from "@mui/material";
import { FC } from "react";
import { TodoItem } from "../../models/todoItem";

interface TaskEditProps {
  task: TodoItem;
  onEditDone(task: TodoItem): void;
}

const TaskEdit: FC<TaskEditProps> = (props) => {
  const handleTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.currentTarget.value;
    // props;
  };

  const handleDoneClick = () => {
    props.onEditDone(props.task);
  };

  return (
    <div>
      <TextField onChange={handleTitleChanged} label="Title" value={props.task.title} />
      <Button onClick={handleDoneClick}>Done</Button>
    </div>
  );
};

export default TaskEdit;
