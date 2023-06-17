import { NoteEntity } from "../entity/NoteEntity";
import { UserEntity } from "../entity/UserEntity";

interface NoteInputSchema {
    title: string;
    description: string;
};

interface DeleteNoteSchema {
    id: string;
};

interface GetNoteSchema {
    id: string;
};

interface GetNotesSchema {
    limit: number;
    offset: number;
};

class NotesService {
    async createNote(input: NoteInputSchema, email: string) {
        const { title, description } = input;

        const user = await UserEntity.findOneBy({ email });

        if (!user) {
            throw new Error('User not found.');
        }

        const createdNote = NoteEntity.create({
            user,
            description,
            title
        });

        await NoteEntity.save(createdNote);
    }

    async deleteNote(input: DeleteNoteSchema, email: string) {
        const { id } = input;

        const note = await NoteEntity.findOne({
            where: { id },
            relations: { user: true }
        });

        if (!note) {
            throw new Error('Note not found.');
        }

        if (note.user.email !== email) {
            throw new Error('Not owner of the note.');
        }

        await NoteEntity.delete(id);
    }

    async getAllNotes(input: GetNotesSchema , email: string) {
        const { limit, offset } = input;

        const userData = await UserEntity.findOneBy({ email });

        if (!userData) {
            throw new Error('User not found.');
        }

        const notes = await NoteEntity
            .createQueryBuilder('note')
            .innerJoinAndSelect('note.user', 'user')
            .where('user.email = :email')
            .skip(offset)
            .take(limit)
            .setParameters({ email })
            .getMany();

        return notes;
    }

    async getNote(input: GetNoteSchema, email: string) {
        const { id } = input;

        // not sure about this

        // const user = await UserEntity.findOneBy({ email });

        // if (!user) {
        //     throw new Error('User not found.');
        // }

        // const note = await createQueryBuilder('note')
        //     .leftJoinAndSelect('note.user', 'user')
        //     .select(['note.title', 'note.description', 'user.email'])
        //     .where('note.id = :id', { id })
        //     .getRawOne();

        const note = await NoteEntity.findOne({
            where: { id },
            relations: { user: true }
        });

        if (!note) {
            throw new Error('Note not found');
        }

        if (note.user.email !== email) {
            throw new Error('Not owner of the note.');
        }

        return note;
    } 
}

export default new NotesService();