import { Box, Container, Typography } from '@material-ui/core';
import { useStyles } from './DetailsStyles';
import FloatingButton from '../FloatingButton/FloatingButton';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { DetailsProps } from './DetailsProps';

const Details = () => {
    const classes = useStyles();

    const [edit, setEdit] = useState(false);

    const data: DetailsProps = {
        title: "SADAS",
        description: "asdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadadasdddddddddsdadassdaadad"
    }

    return (
        <>
            <Container>
                <Box>
                    <Typography variant='h1' className={classes.wordBreak}>
                        {data?.title}
                    </Typography>
                    <Typography variant='body1' className={classes.wordBreak}>
                        {data?.description}
                    </Typography>
                    <FloatingButton text='Edit' icon={<EditIcon />} changeEvent={setEdit} />
                </Box>
            </Container>
        </>
    );
}

export default Details;