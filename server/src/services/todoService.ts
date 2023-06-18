import { DeleteResult, FindOptionsOrderValue, UpdateResult } from 'typeorm';
import { TodoEntity } from '../entity/TodoEntity';
import { TodoInput } from '../interface/todo/TodoInput';
import { Pagination } from '../interface/Pagination';
import userService from './user-service';

class TodoService {

    public async createTodo(input: TodoInput, userId: string): Promise<TodoEntity> {
        const { title, description, dueDate } = input;

        const currentUser = await userService.findUserById(userId);

        if (!currentUser) {
            throw new Error("Missing user");
        }

        const createdTodo = TodoEntity.create({
            user: currentUser,
            title,
            description,
            dueDate
        });

        return TodoEntity.save(createdTodo);
    }

    public async findAllByUserId(userId: string, page?: Pagination): Promise<TodoEntity[]> {
        return TodoEntity.find({
            where: {
                user: {
                    id: userId
                }
            },
            order: {
                dueDate: page?.order as FindOptionsOrderValue
            },
        });
    }

    public async findById(id: string): Promise<TodoEntity | null> {
        return TodoEntity.findOneBy({
            id: id
        });
    }

    public async updateById(input: TodoInput, id: string, userId: string): Promise<UpdateResult> {
        return TodoEntity.update({
            id,
            user: {
                id: userId
            }
        }, {
            title: input.title,
            description: input.description,
            dueDate: input.dueDate
        });
    }

    public async deleteByIdAndUserId(id: string, userId: string): Promise<DeleteResult> {
        return TodoEntity.delete({
            id,
            user: {
                id: userId
            }
        });
    }

    public async findAll(): Promise<TodoEntity[]> {
        return TodoEntity.find();
    }
}

export default new TodoService();