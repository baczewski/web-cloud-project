import { IconButton, ListItem } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import styles from "./Todo.module.css";

export interface TodoInterface {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
};

export const Todo = ({ title, description, dueDate, id }: TodoInterface) => {
  const { todoContainer } = styles;

  const handleDelete = () => {
    console.log("delete" + id)
    // fetch(`http://localhost:8080/todos/${id}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // .then(res => res.json());
  }

  return (
    <ListItem className={todoContainer}>
      <div>{title}</div>
      <div>{description}</div>
      <div>{dueDate.toString()}</div>
      <div>
        <IconButton aria-label="Close" onClick={handleDelete}>
          <CloseIcon />
        </IconButton>
      </div>
    </ListItem>
  );
};
