"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("./data-source");
const notes_1 = __importDefault(require("./routes/notes"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const users_1 = __importDefault(require("./routes/users"));
dotenv_1.default.config();
data_source_1.AppDataSource.initialize().then(async () => {
    app.use('todos', todoRoutes_1.default);
    app.use('/notes', notes_1.default);
    app.use('/', users_1.default);
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send('Internal server error.');
});
app.listen(8080, () => console.log('Listening on port 8080.'));
