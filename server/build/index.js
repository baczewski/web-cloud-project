"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_source_1 = require("./data-source");
const notes_1 = __importDefault(require("./routes/notes"));
dotenv_1.default.config();
data_source_1.AppDataSource.initialize();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/notes', notes_1.default);
app.use('/', (req, res) => {
    return res.json({ message: 'It is working :)' });
});
app.listen(8080, () => console.log('Listening on port 8080.'));
