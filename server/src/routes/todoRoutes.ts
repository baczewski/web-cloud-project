import { NextFunction, Request, Response, Router } from "express";

import todoService from '../services/todoService';
import { TodoInput } from '../interface/todo/TodoInput';
import { Pagination } from '../interface/Pagination';

const todoRouter = Router();

todoRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    const userId = req.body.user.id;
    const page = new Pagination({
        order: req.query.order as string ?? 'DESC',
        offset: parseInt(req.query.offset as string) ?? 0,
        limit: parseInt(req.query.limit as string) ?? 50,
    })

    todoService.findAllByUserId(userId, page)
        .then(result => res.send(200).json(result))
        .catch(err => next(err));
});

todoRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
    const todoData: TodoInput = req.body;
    const userId = req.body.user.id;

    todoService.createTodo(todoData, userId)
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

todoRouter.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    const todoId = req.params.id;
    const userId = req.body.user.id;

    todoService.deleteByIdAndUserId(todoId, userId)
        .then(() => res.status(204).end())
        .catch(err => next(err));
});

export default todoRouter;