import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import {UserEntity} from "../../../web-in-the-clouds/server/src/entity/UserEntity";
import {NoteEntity} from "../../../web-in-the-clouds/server/src/entity/NoteEntity";
import {AppDataSource} from "./data-source";
import notesRouter from './routes/notes';

dotenv.config();

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new UserEntity()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.email = "test@test.test"
    user.password = "hashedPass"
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(UserEntity)
    console.log("Loaded users: ", users)

    console.log("Inserting a new note into the database...")
    const note = new NoteEntity()
    note.user = user;
    note.title = "Test note"
    note.description = "Test content :)"
    await AppDataSource.manager.save(note);
    console.log("Saved a new note with id: " + note.id)

    console.log("Loading notes from the database...")
    const notes = await AppDataSource.manager.find(NoteEntity)
    console.log("Loaded notes: ", notes)

}).catch(error => console.log(error))

const app = express();
app.use(express.json());

app.use('/notes', notesRouter);

app.use('/', (req: Request, res: Response) => {
    return res.json({ message: 'It is working :)' });
});

app.listen(8080, () => console.log('Listening on port 8080.'));