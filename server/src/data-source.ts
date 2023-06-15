import "reflect-metadata"
import {DataSource} from "typeorm"
import {UserEntity} from "./entity/UserEntity";
import {TodoEntity} from "./entity/TodoEntity";
import {NoteEntity} from "./entity/NoteEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "web-clouds",
    synchronize: true,
    // dropSchema: true,
    logging: false,
    entities: [UserEntity, TodoEntity, NoteEntity],
    migrations: [],
    subscribers: [],
})
