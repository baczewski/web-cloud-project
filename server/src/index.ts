import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cron from 'node-cron'
import { AppDataSource } from "./data-source";
import notesRouter from './routes/notes';
import todosRouter from './routes/todos';
import userRoutes from './routes/users';
import { fetchAndCheckTodos } from './services/reminder-service';

dotenv.config();

AppDataSource.initialize().then(async () => {
    app.use('/todos', todosRouter);
    app.use('/notes', notesRouter);
    app.use('/', userRoutes);
});

const app = express();
app.use(express.json());
app.use(cors());

app.listen(8080, () => console.log('Listening on port 8080.'));

cron.schedule('0 * * * *', () => 
    fetchAndCheckTodos()
).start();
