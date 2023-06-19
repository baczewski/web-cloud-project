import { Box, List } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/AppContext";
import { Todo, TodoInterface } from "../../components/Todo/Todo";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import AddIcon from '@mui/icons-material/Add';
import CreateModal from "../../components/CreateModal/CreateModal";
import { FetchType } from "../../components/CreateModal/types";

export const AssignmentPage = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    const user = localStorage.getItem('user') ?? '';

    fetch("http://localhost:8080/todos", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user}`
        },
      })
      .then(res => res.json())
      .then(todos => setTodos(todos.todos))
  }

  return (
    <Box>
      <h2>TODO List</h2>
      { todos ? (
        <List>
          {todos.map((todo) => <Todo key={todo.id} {...todo} loadData={load} />)}
        </List>
      ) : null }
      <CreateModal
        load={load}
        open={showModal}
        onClose={() => setShowModal(false)}
        hasDateInput
        type={FetchType.todos}
      />
      <FloatingButton text='Add Todo' icon={<AddIcon />} changeEvent={setShowModal} />
    </Box>
  );
};
