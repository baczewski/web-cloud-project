import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import notesRouter from './routes/notes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/notes', notesRouter);

app.use('/', (req: Request, res: Response) => {
    return res.json({ message: 'It is working :)' });
});

app.listen(8080, () => console.log('Listening on port 8080.'));