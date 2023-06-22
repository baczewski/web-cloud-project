import { httpService } from "./httpService";

interface NoteModel {
    id: string;
    title: string;
    description: string;
};

interface LoadNotesResponse {
    notes: NoteModel[]; 
};

class NotesService {
    async loadNotes() : Promise<LoadNotesResponse> {
        const { notes } = await httpService.get<LoadNotesResponse>('/notes');
        return { notes };
    }
}

export const notesService = new NotesService();