import { NextFunction, Request, Response, Router } from "express";

import todoService from '../services/todoService';
import { TodoInput } from '../interface/todo/TodoInput';
import { Pagination } from '../interface/Pagination';
import auth, { currentUser } from "../middlewares/auth-middleware";

const todoRouter = Router();

todoRouter.get('/', auth, (req: Request, res: Response, next: NextFunction) => {
    const user = currentUser(res);
    const page = new Pagination({
        order: req.query.order as string ?? 'DESC',
        offset: parseInt(req.query.offset as string) ?? 0,
        limit: parseInt(req.query.limit as string) ?? 50,
    });

    todoService.findAllByUserId(user.id, page)
        .then(result => res.status(200).json({ todos: result }))
        .catch(err => next(err));
});

todoRouter.post('/', auth, (req: Request, res: Response, next: NextFunction) => {
    const user = currentUser(res);
    const todoData: TodoInput = req.body;

    todoService.createTodo(todoData, user.id)
        .then(result => res.status(201).json(result))
        .catch(err => next(err));
});

todoRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const todoId = req.params.id;

    todoService.findById(todoId)
        .then(result => res.status(200).json(result))
        .catch(err => next(err));
});

todoRouter.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    const todoData: TodoInput = req.body;
    const todoId = req.params.id;
    const userId = req.body.user.id;

    todoService.updateById(todoData, todoId, userId)
        .then(result => res.status(200).json(result))
        .catch(err => next(err));
});

todoRouter.delete('/:id', auth, (req: Request, res: Response, next: NextFunction) => {
    const user = currentUser(res);
    const todoId = req.params.id;

    todoService.deleteByIdAndUserId(todoId, user.id)
        .then(() => res.status(204).end())
        .catch(err => next(err));
});

export default todoRouter;