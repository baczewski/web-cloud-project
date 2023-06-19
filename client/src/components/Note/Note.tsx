import { Card, CardActions, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { NoteModel } from '../../pages/home/HomePage';

export const Note = ({ id, title, description }: NoteModel) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Note
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    { title ?? '-' }
                </Typography>
                <Typography variant="body2">
                    { description ?? '-' }
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/details/${id}`}>
                    <Button size="small">Details</Button>
                </Link>
            </CardActions>
        </Card>
    )
}