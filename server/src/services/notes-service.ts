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

interface EditNoteSchema {
    id: string;
    title: string;
    description: string;
};

interface GetNotesSchema {
    limit: number;
    offset: number;
};

class NotesService {
    async createNote(input: NoteInputSchema, userId: string) {
        const { title, description } = input;

        const user = await UserEntity.findOneBy({ id: userId });

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

    async editNote(input: EditNoteSchema, userId: string) {
        const { id, title, description } = input;

        const note = await NoteEntity.findOne({
            where: { id },
            relations: { user: true }
        });

        if (!note) {
            throw new Error('Note not found.');
        }

        if (note.user.id !== userId) {
            throw new Error('Not owner of the note.');
        }

        return NoteEntity.update({ id }, { title, description });
    }

    async deleteNote(input: DeleteNoteSchema, userId: string) {
        const { id } = input;

        const note = await NoteEntity.findOne({
            where: { id },
            relations: { user: true }
        });

        if (!note) {
            throw new Error('Note not found.');
        }

        if (note.user.id !== userId) {
            throw new Error('Not owner of the note.');
        }

        await NoteEntity.delete(id);
    }

    async getAllNotes(input: GetNotesSchema, userId: string) {
        const { limit, offset } = input;

        const userData = await UserEntity.findOneBy({ id: userId });

        if (!userData) {
            throw new Error('User not found.');
        }

        const notes = await NoteEntity
            .createQueryBuilder('note')
            .innerJoinAndSelect('note.user', 'user')
            .where('user.id = :userId')
            .skip(offset)
            .take(limit)
            .setParameters({ userId })
            .getMany();

        return notes;
    }

    async getNote(input: GetNoteSchema, userId: string) {
        const { id } = input;

        const note = await NoteEntity.findOne({
            where: { id },
            relations: { user: true }
        });

        if (!note) {
            throw new Error('Note not found');
        }

        if (note.user.id !== userId) {
            throw new Error('Not owner of the note.');
        }

        return note;
    } 
}

export default new NotesService();