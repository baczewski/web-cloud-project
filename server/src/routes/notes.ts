import { Request, Response, Router } from 'express';
import notesService from '../services/notes-service';
import auth, { currentUser } from '../middlewares/auth-middleware';

const notesRouter = Router();

notesRouter.get('/', auth, async (req: Request, res: Response) => {
    const user = currentUser(res);
    const limit = req.query.limit as string ?? 50;
    const offset = req.query.offset as string ?? 0;

    try {
        const notes = await notesService.getAllNotes({ limit: Number(limit), offset: Number(offset) }, user.id);

        return res.status(200).json({ notes });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});

notesRouter.get('/:id', auth, async (req: Request, res: Response) => {
    const user = currentUser(res);
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'Missing id parameter.' });
    }

    try {
        const note = await notesService.getNote({ id }, user.id);

        return res.status(200).json({ note });
    } catch (err) {
        return res.status(500).json({ error: 'Internal server error.' });
    }
});

notesRouter.post('/', auth, async (req: Request, res: Response) => {
    const user = currentUser(res);
    const { title, description } = req.body;

    if (!(title && description)) {
        return res.status(400).json({ error: 'Missing title or description parameter.' });
    }

    try {
        await notesService.createNote({ title, description }, user.id);

        return res.status(201).json({ message: 'Created note succesfully.' });
    } catch (err) {
        return res.status(500).json({ error: 'Internal server error.' });
    }
});

notesRouter.put('/:id', auth, async (req: Request, res: Response) => {
    const user = currentUser(res);
    const { id } = req.params;
    const { title, description } = req.body;

    if (!id) {
        return res.status(400).json({ error: 'Missing id parameter.' });
    }

    try {
        await notesService.editNote({ id, title, description }, user.id);
        return res.status(200).json({ message: 'Successfully updated a note.' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});

notesRouter.delete('/:id', auth, async (req: Request, res: Response) => {
    const user = currentUser(res);
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'Missing id parameter.' });
    }

    try {
        await notesService.deleteNote({ id }, user.id);

        return res.status(200).json({ message: 'Deleted note succesfully.' });
    } catch (err) {
        return res.status(500).json({ error: 'Internal server error.' });
    }
});

export default notesRouter;