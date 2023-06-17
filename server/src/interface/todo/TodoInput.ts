import { Pagination } from '../Pagination'

export interface TodoInput {
    title?: string
    description?: string
    dueDate?: Date,
    page?: Pagination,
}