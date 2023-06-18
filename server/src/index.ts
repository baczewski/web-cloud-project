import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { AppDataSource } from "./data-source";
import notesRouter from './routes/notes';
import todoRouter from './routes/todoRoutes';
import userRoutes from './routes/users';

dotenv.config();

AppDataSource.initialize().then(async () => {
    app.use('todos', todoRouter);
    app.use('/notes', notesRouter);
    app.use('/', userRoutes);
});

const app = express();
app.use(express.json());
app.use(cors());

app.listen(8080, () => console.log('Listening on port 8080.'));