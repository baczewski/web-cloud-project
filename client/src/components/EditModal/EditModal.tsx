import { Box, Button, Input, InputLabel, Modal, TextareaAutosize, Typography } from "@material-ui/core";
import { EditModalProps } from "./types";
import { useStyles } from "./EditModalStyles";
import { useState } from "react";

export const EditModal = ({ id, details, open, onClose, reload }: EditModalProps) => {
  const [title, setTitle] = useState(details.title ?? '');
  const [description, setDescription] = useState(details.description ?? ''); 

  const classes = useStyles();

  const handleOnSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    const user = localStorage.getItem('user') ?? '';

    await fetch(`http://localhost:8080/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user}`
      },
      body: JSON.stringify({ title, description })
    });

    onClose();
    reload();
  }

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
      >
        <Box className={classes.wrapper} component='form' onSubmit={handleOnSubmit}>
          <Typography color="primary" className={classes.header}>
            Edit a note
          </Typography>
          <Box className={classes.inputWrapper}>
            <InputLabel className={classes.inputLabel}>
              Title
            </InputLabel>
            <Input
              required
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              className={classes.input}
            />
          </Box>
          <Box className={classes.inputWrapper}>
            <InputLabel className={classes.inputLabel}>
              Description
            </InputLabel>
            <TextareaAutosize
              required
              minRows={4}
              className={classes.textarea}
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Box>
          <Button
            color="primary"
            className={classes.button}
            type='submit'
          >
            Edit
          </Button>
        </Box>
      </Modal>
    </>
  );
};
