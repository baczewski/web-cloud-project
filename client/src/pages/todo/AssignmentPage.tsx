import { Box, List } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/AppContext";
import { Todo, TodoInterface } from "../../components/Todo/Todo";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import AddIcon from '@mui/icons-material/Add';
import CreateModal from "../../components/CreateModal/CreateModal";
import { FetchType } from "../../components/CreateModal/types";

export const AssignmentPage = () => {
  const fake = [{ id: "asd", title: "1", description: "asadsssssssssssssssssssssssdasadsssssssssssssssssssssssdasadsssssssssssssssssssssssdasadsssssssssssssssssssssssdasadsssssssssssssssssssssssdasadsssssssssssssssssssssssdasadsssssssssssssssssssssssdasadsssssssssssssssssssssssdasadsssssssssssssssssssssssdasadsssssssssssssssssssssssd", dueDate: new Date() }, { id: "asd", title: "12", description: "asd", dueDate: new Date() }]

  const [todos, setTodos] = useState<TodoInterface[]>(fake);
  const [showModal, setShowModal] = useState(false);

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
        {todos.map((todo) => <Todo {...todo} />)}
      </List>
      <CreateModal
        open={showModal}
        onClose={() => setShowModal(false)}
        hasDateInput
        type={FetchType.todos}
      />
      <FloatingButton text='Add Todo' icon={<AddIcon />} changeEvent={setShowModal} />
    </Box>
  );
};
