import { Request, Response, Router } from 'express';

const notesRouter = Router();

notesRouter.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Notes router is working.' });
});

export default notesRouter;