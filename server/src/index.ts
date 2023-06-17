import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from "./data-source";
import notesRouter from './routes/notes';
import todoRouter from './routes/todoRoutes';

dotenv.config();

const app = express();
app.use(express.json());

AppDataSource.initialize()
    .then(async () => {
        app.use('/notes', notesRouter);
        app.use('/todos', todoRouter);
    })
    .catch(err => console.error(err));

app.use((err: Error, req: Request, res: Response): void => {
    console.error(err.stack)
    res.status(500).send('Internal server error.');
});

app.listen(8080, () => console.log('Listening on port 8080.'));