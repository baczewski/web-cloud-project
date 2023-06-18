import { Box, Button, Input, InputLabel, Modal, TextareaAutosize, Typography, makeStyles } from "@material-ui/core";
import { Fragment, useState } from "react";

const useStyles = makeStyles(() => ({
    wrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        padding: 30,
        backgroundColor: 'white',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center'
    },
    button: {
        width: '80%',
        alignSelf: 'center'
    },
    inputWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        gap: 5
    },
    inputLabel: {
        alignSelf: 'flex-start'
    },
    input: {
        width: '100%'
    },
    header: {
        fontSize: 26,
        marginBottom: 20
    },
    textarea: {
        width: '100%',
        maxWidth: '120%',
        maxHeight: '200px',
        minWidth: '100%',
        border: '1px solid gray'
    }
}));

interface CreateModalProps {
    open: boolean;
    onClose: () => void;
};

const CreateModal = ({ open, onClose }: CreateModalProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const classes = useStyles();

    const handleOnClose = () => {
        setTitle('');
        setDescription('');
        onClose();
    } 

    const handleOnSubmit = async () => {
        const response = await fetch('http://localhost:8080/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        });

        if (response.ok) {
            handleOnClose();
        } else {
            window.alert('Failed to create a note.');
        }
    }

    return (
        <Fragment>
            <Modal
                open={open}
                onClose={handleOnClose}
            >
                <Box className={classes.wrapper} component='form' onSubmit={handleOnSubmit}>
                    <Typography color="primary" className={classes.header}>
                        Create a note
                    </Typography>
                    <Box className={classes.inputWrapper}>
                        <InputLabel className={classes.inputLabel}>
                            Title
                        </InputLabel>
                        <Input
                            required
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
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
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </Box>
                    <Button 
                        color="primary" 
                        className={classes.button}
                        type='submit'
                    >
                        fade
                    </Button>
                </Box>
            </Modal>
        </Fragment>
    )
};

export default CreateModal;