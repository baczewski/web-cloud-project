"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NoteEntity_1 = require("../entity/NoteEntity");
const UserEntity_1 = require("../entity/UserEntity");
;
;
;
;
class NotesService {
    async createNote(input, email) {
        const { title, description } = input;
        const user = await UserEntity_1.UserEntity.findOneBy({ email });
        if (!user) {
            throw new Error('User not found.');
        }
        const createdNote = NoteEntity_1.NoteEntity.create({
            user,
            description,
            title
        });
        await NoteEntity_1.NoteEntity.save(createdNote);
    }
    async deleteNote(input, email) {
        const { id } = input;
        const note = await NoteEntity_1.NoteEntity.findOne({
            where: { id },
            relations: { user: true }
        });
        if (!note) {
            throw new Error('Note not found.');
        }
        if (note.user.email !== email) {
            throw new Error('Not owner of the note.');
        }
        await NoteEntity_1.NoteEntity.delete(id);
    }
    async getAllNotes(input, email) {
        const { limit, offset } = input;
        const userData = await UserEntity_1.UserEntity.findOneBy({ email });
        if (!userData) {
            throw new Error('User not found.');
        }
        const notes = await NoteEntity_1.NoteEntity
            .createQueryBuilder('note')
            .innerJoinAndSelect('note.user', 'user')
            .where('user.email = :email')
            .skip(offset)
            .take(limit)
            .setParameters({ email })
            .getMany();
        return notes;
    }
    async getNote(input, email) {
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
        const note = await NoteEntity_1.NoteEntity.findOne({
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
exports.default = new NotesService();
