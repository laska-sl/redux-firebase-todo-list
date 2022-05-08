import { Button, FormControlLabel, Switch } from "@mui/material";
import { Component } from "react";
import { TodoItem } from "../models/todoItem";
import Task from "./Task/Task";

interface TaskListProps {}

interface TaskListState {
  tasks: TodoItem[];
  includeCompleted: boolean;
}

export default class TaskList extends Component<TaskListProps, TaskListState> {
  state: TaskListState = { tasks: [], includeCompleted: false };

  componentDidMount() {
    // getItems().then(items => this.setState({tasks: items}));
    // this.setState({ tasks: getItems() });
  }

  handleNewClick = () => {
    console.log("new click");
  };

  handleOnChange = (updatedItem: TodoItem) => {
    let itemIndex = this.state.tasks.findIndex((task: TodoItem) => task.id === updatedItem.id);

    const items = [...this.state.tasks];

    items[itemIndex] = updatedItem;

    this.setState({ tasks: items });
  };

  toggleIncludeCompleted = () => {
    this.state.includeCompleted = !this.state.includeCompleted;
  };

  handleOnRemove = (id: string) => {
    let itemIndex = this.state.tasks.findIndex((task: TodoItem) => task.id === id);

    if (itemIndex > -1) {
      //   removeItem(id).then(() => {
      //     this.state.tasks.splice(itemIndex, 1);
      //     console.log("tasks after removal: ");
      //     console.table(this.state.tasks);
      //   });
    }
  };

  render() {
    const tasks = this.state.includeCompleted ? this.state.tasks : this.state.tasks.filter(item => !item.isCompleted);

    return (
      <div>
        <Button onClick={this.handleNewClick}>New</Button>
        <FormControlLabel control={<Switch />} label="Include completed" onChange={() => this.toggleIncludeCompleted} />
        {tasks.map(todoItem => (
          <Task task={todoItem} key={todoItem.id} onRemove={this.handleOnRemove} onChange={this.handleOnChange} />
        ))}
      </div>
    );
  }
}
