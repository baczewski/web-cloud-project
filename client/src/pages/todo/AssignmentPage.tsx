import { Box, List } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/AppContext";
import { Todo, TodoInterface } from "../../components/Todo/Todo";

export const AssignmentPage = () => {
  const { globalState } = useContext(GlobalContext);

  const [todos, setTodos] = useState<TodoInterface[]>([{id: "asd", title:"1", description:"asd", dueDate: new Date()},{id: "asd", title:"12", description:"asd", dueDate: new Date()}])

  // useEffect(() => {
  //   fetch("http://localhost:8080/todos", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then(res => res.json())
  //     .then(todos => setTodos(todos))
  // }, []);

  return (
    <Box>
      <h2>TODO List</h2>
      <List>
        {todos.map((todo) => <Todo {...todo}/>)}
      </List>
    </Box>
  );
};
