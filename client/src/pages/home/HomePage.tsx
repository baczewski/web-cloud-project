import { Note } from '../../components/Note/Note';
import { useStyles } from './HomePageStyles';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import CreateModal from '../../components/CreateModal/CreateModal';
import { Box, Container, Typography } from '@material-ui/core';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import { FetchType } from '../../components/CreateModal/types';

export interface NoteModel {
    id: string;
    title: string;
    description: string;
};

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [notes, setNotes] = useState([] as NoteModel[]);

    const classes = useStyles();

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const user = localStorage.getItem('user') ?? '';

        const response = await fetch('http://localhost:8080/notes', {
           method: 'GET',
           headers: {
            'Authorization': `Bearer ${user}`
           } 
        });

        const notes = await response.json();
        setNotes(notes.notes);
    };

    return (
            <Box>
                <CreateModal
                    load={load}
                    open={showModal} 
                    onClose={() => setShowModal(false)}
                    type={FetchType.notes}
                />
                { notes && notes.length ? (
                    <Container className={classes.notesWrapper}>
                        { notes.map(({ id, title, description }) => (
                            <Note key={id} id={id} title={title} description={description} />
                        )) }
                    </Container>
                ) : (
                    <Typography>
                        There are no any notes
                    </Typography>
                ) }
                <FloatingButton text='Add Note' icon={<AddIcon />} changeEvent={setShowModal} />
            </Box>
    );
};

export default HomePage;
