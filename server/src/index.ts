import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from "./data-source";
import notesRouter from './routes/notes';

dotenv.config();

AppDataSource.initialize().then(async () => {
    // await notesService.createNote({ title: 'title 2', description: 'description 2' }, 'test@test.test');
    // await notesService.deleteNote({ id: '2da33ea9-7c10-4670-85a8-9ba622e60a31' }, 'test@test.test');

    // await notesService.getAllNotes('test@test.test');
    // const note = await notesService.getNote({ id: '0de8cd52-e9a0-4869-801e-9198cd6dbcbe' }, 'test@test.test');
    // console.log(note);

    app.use('/notes', notesRouter);
});

const app = express();
app.use(express.json());


// app.use('/', (req: Request, res: Response) => {
//     return res.json({ message: 'It is working :)' });
// });

app.listen(8080, () => console.log('Listening on port 8080.'));