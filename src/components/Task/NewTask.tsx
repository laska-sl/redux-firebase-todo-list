import { TextField, Button } from "@mui/material";
import React, { FC } from "react";

interface NewTaskProps {}

const NewTask: FC<NewTaskProps> = () => {
  const handleTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.currentTarget.value;
    console.log(title);
  };

  const handleAddClick = () => {
    console.log("Add click");
  };

  return (
    <div>
      <TextField onChange={handleTitleChanged}></TextField>
      <Button onClick={handleAddClick}>Add</Button>
    </div>
  );
};

export default NewTask;
