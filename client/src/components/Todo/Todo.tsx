import { Checkbox, IconButton, ListItem } from "@material-ui/core";
import styles from "./Todo.module.css";
import { DueDate } from "../DueDate/DueDate";
import { useState } from "react";
import { todosService } from "../../service/todosService";

export interface TodoInterface {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  loadData?: () => void;
  completed: boolean;
};

export const Todo = ({ title, description, dueDate, id, completed, loadData }: TodoInterface) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(completed);
  const { todoContainer, todoTitle, todoDescription, deleteButton } = styles;

  const handleDelete = async () => {
    await todosService.deleteTodo(id);

    if (loadData) {
      loadData();
    }
  }

  const handleTriggerCheck = async () => {
    await todosService.toggleCheckTodo(id, isCheckboxChecked);

    if (loadData) {
      loadData();
    }
  }

  const handleOnCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(event.target.checked);
    handleTriggerCheck();
  }

  return (
    <ListItem className={todoContainer}>
      <Checkbox 
        checked={completed} 
        onChange={handleOnCheckboxChange} 
      />
      <div className={todoTitle}>{title}</div>
      <div className={todoDescription}>{description}</div>
      <DueDate date={new Date(dueDate)}/>
      <div className={deleteButton}>
        <IconButton aria-label="Close" onClick={handleDelete}>
          <h1>X</h1>
        </IconButton>
      </div>
    </ListItem>
  );
};
