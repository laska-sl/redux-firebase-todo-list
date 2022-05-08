import { Component } from "react";

import TaskEdit from "./TaskEdit";
import TaskInfo from "./TaskInfo";

import { TodoItem } from "../../models/todoItem";
import { updateItem } from "../../services/todoItemsService";

interface TaskProps {
  task: TodoItem;
  onRemove(id: string): void;
  onChange(task: TodoItem): void;
}

interface TaskState {
  isEditMode: boolean;
}

export default class Task extends Component<TaskProps, TaskState> {
  state = { isEditMode: false };

  handleOnEdit = () => {
    this.toggleEditMode();
  };

  handleOnEditDone = () => {
    this.toggleEditMode();
  };

  toggleEditMode() {
    console.log(this.state.isEditMode);

    this.setState((prevState) => ({ isEditMode: !prevState.isEditMode }));
  }

  handleOnRemove = () => {
    this.props.onRemove(this.props.task.id);
  };

  handleOnToggleComplete = () => {
    let task = this.props.task;
    task.isCompleted = !task.isCompleted;
    updateItem(task);

    this.props.onChange(this.props.task);
  };

  render() {
    const isEditMode = this.state.isEditMode;

    return (
      <div>
        {isEditMode ? (
          <TaskEdit task={this.props.task} onEditDone={this.handleOnEditDone} />
        ) : (
          <TaskInfo
            task={this.props.task}
            onEdit={this.handleOnEdit}
            onRemove={this.handleOnRemove}
            onToggleComplete={this.handleOnToggleComplete}
          />
        )}
        <hr />
      </div>
    );
  }
}
