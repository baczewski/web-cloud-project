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
data_source_1.AppDataSource.initialize().then(async () => {
    // await notesService.createNote({ title: 'title 2', description: 'description 2' }, 'test@test.test');
    // await notesService.deleteNote({ id: '2da33ea9-7c10-4670-85a8-9ba622e60a31' }, 'test@test.test');
    // await notesService.getAllNotes('test@test.test');
    // const note = await notesService.getNote({ id: '0de8cd52-e9a0-4869-801e-9198cd6dbcbe' }, 'test@test.test');
    // console.log(note);
    app.use('/notes', notes_1.default);
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use('/', (req: Request, res: Response) => {
//     return res.json({ message: 'It is working :)' });
// });
app.listen(8080, () => console.log('Listening on port 8080.'));
