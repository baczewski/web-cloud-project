import { IconButton, ListItem } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import styles from "./Todo.module.css";
import { DueDate } from "../DueDate/DueDate";

export interface TodoInterface {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  loadData?: () => void;
};

export const Todo = ({ title, description, dueDate, id, loadData }: TodoInterface) => {
  const { todoContainer, todoTitle, todoDescription, deleteButton } = styles;

  const handleDelete = () => {
    const user = localStorage.getItem('user') ?? '';

    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user}`
      }
    }).then(() => loadData?.());
  }

  return (
    <ListItem className={todoContainer}>
      <div className={todoTitle}>{title}</div>
      <div className={todoDescription}>{description}</div>
      <DueDate date={new Date(dueDate)}/>
      <div className={deleteButton}>
        <IconButton aria-label="Close" onClick={handleDelete}>
          <CloseIcon />
        </IconButton>
      </div>
    </ListItem>
  );
};
