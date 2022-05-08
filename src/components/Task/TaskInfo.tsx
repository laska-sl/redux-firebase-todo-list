import { FC } from "react";
import { TodoItem } from "../../models/todoItem";
import TaskControls from "./TaskControls";

interface TaskInfoProps {
  task: TodoItem;
  onEdit(): void;
  onRemove(): void;
  onToggleComplete(): void;
}

const TaskInfo: FC<TaskInfoProps> = (props) => {
  const handleOnEdit = () => {
    props.onEdit();
  };

  const handleOnRemove = () => {
    props.onRemove();
  };

  const handleOnToggleComplete = () => {
    props.onToggleComplete();
  };

  return (
    <div>
      {props.task.title}
      <TaskControls
        task={props.task}
        onEdit={handleOnEdit}
        onRemove={handleOnRemove}
        onToggleComplete={handleOnToggleComplete}
      />
    </div>
  );
};

export default TaskInfo;
