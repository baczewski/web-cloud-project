import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from "./data-source";
import notesRouter from './routes/notes';
import notesService from './services/notes-service';

dotenv.config();

AppDataSource.initialize().then(async () => {
    await notesService.createNote({ title: 'title', description: 'description' }, 'test@test.test');

    app.use('/notes', notesRouter);
});

const app = express();
app.use(express.json());


app.use('/', (req: Request, res: Response) => {
    return res.json({ message: 'It is working :)' });
});

app.listen(8080, () => console.log('Listening on port 8080.'));