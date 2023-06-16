import { UserEntity } from "../entity/UserEntity";

interface NoteInputSchema {
    title: string;
    description: string;
};

class NotesService {
    async createNote(input: NoteInputSchema, email: string) {
        const { title, description } = input;

        const user = await UserEntity.findOneBy({ email });

        if (!user) {

        }


    }
}

export default new NotesService();