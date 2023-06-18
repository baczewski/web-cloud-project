import { Note } from '../../components/Note/Note';
import { useStyles } from './HomePageStyles';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import CreateModal from '../../components/CreateModal/CreateModal';
import { Box, Container } from '@material-ui/core';
import FloatingButton from '../../components/FloatingButton/FloatingButton';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const classes = useStyles();

    return (
            <Box>
                <CreateModal 
                    open={showModal} 
                    onClose={() => setShowModal(false)} 
                />
                <Container className={classes.notesWrapper}>
                    <Note />
                    <Note /><Note /><Note /><Note /><Note /><Note /><Note /><Note /><Note />
                </Container>
                <FloatingButton text='Add Note' icon={<AddIcon />} changeEvent={setShowModal} />
            </Box>
    );
};

export default HomePage;
