import { NextFunction, Request, Response, Router } from "express";
import todoService from '../services/todos-service';
import { TodoInput } from '../interface/todo/TodoInput';
import { Pagination } from '../interface/Pagination';
import auth, { currentUser } from "../middlewares/auth-middleware";

const todoRouter = Router();

todoRouter.get('/', auth, async (req: Request, res: Response, next: NextFunction) => {
    const user = currentUser(res);

    const page = new Pagination({
        order: req.query.order as string ?? 'DESC',
        offset: parseInt(req.query.offset as string) ?? 0,
        limit: parseInt(req.query.limit as string) ?? 50,
    });

    try {
        const todos = await todoService.findAllByUserId(user.id, page);
        return res.status(200).json({ todos });
    } catch (error) {
        console.log(error);
        next();
    }
});

todoRouter.post('/', auth, async (req: Request, res: Response, next: NextFunction) => {
    const user = currentUser(res);
    const todoData: TodoInput = req.body;

    try {
        await todoService.createTodo(todoData, user.id);
        return res.status(201).json({ message: 'Successfully created a todo.' });
    } catch (err) {
        console.log(err);
        next();
    }
});

todoRouter.get('/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
        const todo = await todoService.findById(id);
        return res.status(200).json(todo);
    } catch (err) {
        console.log(err);
        next();
    }
});

todoRouter.put('/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    const user = currentUser(res);
    const todoData: TodoInput = req.body;
    const { id } = req.params;

    try {
        await todoService.updateById(todoData, id, user.id);
        return res.status(200).json({ message: 'Successfully updated a todo.' });
    } catch (err) {
        console.log(err);
        next();
    }
});

todoRouter.put('/check/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    const user = currentUser(res);
    const { checked } = req.body;
    const { id } = req.params;

    try {
        await todoService.triggerCheckedById(id, user.id, !checked);
        return res.status(200).json({ message: 'Successfully updated a todo.' });
    } catch (err) {
        console.log(err);
        next();
    }
});

todoRouter.delete('/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    const user = currentUser(res);
    const { id } = req.params;

    try {
        await todoService.deleteByIdAndUserId(id, user.id);
        return res.status(200).json({ message: 'Successfully deleted a todo.' });
    } catch (err) {
        console.log(err);
        next();
    }
});

export default todoRouter;