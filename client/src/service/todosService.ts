import { httpService } from "./httpService";

interface TodoModel {
    id: string;
    dueDate: Date;
    title: string;
    completed: boolean;
    description: string;
};

interface LoadTodosResponse {
    todos: TodoModel[];
};

class TodosService {
    async loadTodos() : Promise<LoadTodosResponse> {
        const { todos } = await httpService.get<LoadTodosResponse>('/todos');
        return { todos };
    }

    async deleteTodo(id: string) : Promise<void> {
        await httpService.delete(`/todos/${id}`, { });
    }

    async toggleCheckTodo(id: string, checked: boolean) : Promise<void> {
        await httpService.put(`/todos/check/${id}`, { 
            body: {
                checked 
            }
        });
    }
};

export const todosService = new TodosService();