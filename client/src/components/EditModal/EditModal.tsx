import { Box, Button, Input, InputLabel, Modal, TextareaAutosize, Typography } from "@material-ui/core";
import { EditModalProps } from "./types";
import { useStyles } from "./EditModalStyles";
import { DetailsProps } from "../Details/DetailsProps";

export const EditModal = ({ details, updateDetailes, open, onClose }: EditModalProps) => {

  const classes = useStyles();

  const handleOnSubmit = () => {

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
              value={details.title}
              onChange={(event) => {
                const newState: DetailsProps = { ...details, title: event.target.value };
                updateDetailes(newState);
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
              value={details.title}
              onChange={(event) => {
                const newState: DetailsProps = { ...details, description: event.target.value };
                updateDetailes(newState);
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
