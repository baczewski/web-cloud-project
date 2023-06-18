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
    host: process.env.DB_HOSTNAME,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    dropSchema: true,
    logging: false,
    entities: [UserEntity_1.UserEntity, NoteEntity_1.NoteEntity, TodoEntity_1.TodoEntity],
    migrations: [],
    subscribers: [],
});
