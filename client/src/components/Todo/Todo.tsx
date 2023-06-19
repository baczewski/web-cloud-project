import { IconButton, ListItem } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import styles from "./Todo.module.css";
import { DueDate } from "../DueDate/DueDate";

export interface TodoInterface {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
};

export const Todo = ({ title, description, dueDate, id }: TodoInterface) => {
  const { todoContainer, todoTitle, todoDescription, deleteButton } = styles;

  const handleDelete = () => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <ListItem className={todoContainer}>
      <div className={todoTitle}>{title}</div>
      <div className={todoDescription}>{description}</div>
      <DueDate date={dueDate}/>
      <div className={deleteButton}>
        <IconButton aria-label="Close" onClick={handleDelete}>
          <CloseIcon />
        </IconButton>
      </div>
    </ListItem>
  );
};
