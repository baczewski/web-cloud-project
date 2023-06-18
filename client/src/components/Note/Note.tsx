import { Card, CardActions, CardContent, Typography, Button } from '@mui/material';

export const Note = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Test
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Testing
                </Typography>
                <Typography variant="body2">
                    More testing
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Button Test</Button>
            </CardActions>
        </Card>
    )
}