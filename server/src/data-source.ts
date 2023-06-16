import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserEntity } from "./entity/UserEntity";
import { TodoEntity } from "./entity/TodoEntity";
import { NoteEntity } from "./entity/NoteEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOSTNAME,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    // dropSchema: true,
    logging: false,
    entities: [UserEntity, TodoEntity, NoteEntity],
    migrations: [],
    subscribers: [],
})
