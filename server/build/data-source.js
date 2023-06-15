"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const UserEntity_1 = require("./entity/UserEntity");
const TodoEntity_1 = require("./entity/TodoEntity");
const NoteEntity_1 = require("./entity/NoteEntity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "web-clouds",
    synchronize: true,
    // dropSchema: true,
    logging: false,
    entities: [UserEntity_1.UserEntity, TodoEntity_1.TodoEntity, NoteEntity_1.NoteEntity],
    migrations: [],
    subscribers: [],
});
