import { Container, Typography } from '@material-ui/core';
import { useStyles } from './DetailsStyles';
import FloatingButton from '../FloatingButton/FloatingButton';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import { DetailsProps } from './DetailsProps';
import { useParams } from 'react-router-dom';
import { EditModal } from '../EditModal/EditModal';

const Details = () => {
    const { id } = useParams();
    const classes = useStyles();

    const [noteDetails, setNoteDetails] = useState({} as DetailsProps);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        load();
    }, []);

        
    const load = async () => {
        const user = localStorage.getItem('user') ?? '';

        const response = await fetch(`http://localhost:8080/notes/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user}`
            }
        });

        const content = await response.json();
        setNoteDetails(content.note);
    }

    return (
        <Container>
            { noteDetails.title && noteDetails.description ? (
                <>
                    <Typography variant='h1' className={classes.wordBreak}>
                        {noteDetails.title}
                    </Typography>
                    <Typography variant='body1' className={classes.wordBreak}>
                        {noteDetails.description}
                    </Typography>
                    <FloatingButton text='Edit' icon={<EditIcon />} changeEvent={setShowModal} />
                    {/* feature */}
                    <EditModal
                        id={id ?? ''}
                        details={noteDetails} 
                        open={showModal} 
                        onClose={() => setShowModal(false)}
                        reload={load}
                    />
                </>
            ) : <></> }
        </Container>
    );
}

export default Details;