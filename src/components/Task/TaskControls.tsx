import { Button, Checkbox } from "@mui/material";
import { FC } from "react";
import { TodoItem } from "../../models/todoItem";

interface TaskControlsProps {
  task: TodoItem;
  onEdit(): void;
  onRemove(): void;
  onToggleComplete(): void;
}

const TaskControls: FC<TaskControlsProps> = (props) => {
  const handleEditClick = () => {
    props.onEdit();
  };

  const handleRemoveClick = () => {
    props.onRemove();
  };

  const handleToggleComplete = () => {
    props.onToggleComplete();
  };

  return (
    <div>
      <Checkbox checked={props.task.isCompleted} onChange={handleToggleComplete} />
      <Button onClick={handleEditClick}>Edit *icon*</Button>
      <Button onClick={handleRemoveClick}>Remove *icon*</Button>
    </div>
  );
};

export default TaskControls;
