import { Note } from '../../components/Note/Note';
import { useStyles } from './HomePageStyles';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import CreateModal from '../../components/CreateModal/CreateModal';
import { Container, Fab, Typography } from '@material-ui/core';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const classes = useStyles();

    return (
            <>
                <CreateModal 
                    open={showModal} 
                    onClose={() => setShowModal(false)} 
                />
                <Container className={classes.notesWrapper}>
                    <Note />
                    <Note /><Note /><Note /><Note /><Note /><Note /><Note /><Note /><Note />
                </Container>
                <Fab 
                    variant="extended" 
                    color="primary" 
                    className={classes.buttonWrapper} 
                    onClick={() => setShowModal(true)}
                >
                    <AddIcon className={classes.bottonIcon} />
                    <Typography>
                        Add Note
                    </Typography>
                </Fab>
            </>
    );
};

export default HomePage;
