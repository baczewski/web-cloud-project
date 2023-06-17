"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notes_service_1 = __importDefault(require("../services/notes-service"));
const user = { id: 0, email: 'test@test.test' };
const notesRouter = (0, express_1.Router)();
notesRouter.get('/', async (req, res) => {
    // const { limit, offset } = req.query;
    const limit = req.query.limit ?? 50;
    const offset = req.query.offset ?? 0;
    try {
        const notes = await notes_service_1.default.getAllNotes({ limit: +limit, offset: +offset }, user.email);
        return res.status(200).json({ notes });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});
notesRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'Missing id parameter.' });
    }
    try {
        const note = await notes_service_1.default.getNote({ id }, user.email);
        return res.status(200).json({ note });
    }
    catch (err) {
        return res.status(500).json({ error: 'Internal server error.' });
    }
});
notesRouter.post('/', async (req, res) => {
    const { title, description } = req.body;
    if (!(title && description)) {
        return res.status(400).json({ error: 'Missing title or description parameter.' });
    }
    try {
        await notes_service_1.default.createNote({ title, description }, user.email);
        return res.status(201).json({ message: 'Created note succesfully.' });
    }
    catch (err) {
        return res.status(500).json({ error: 'Internal server error.' });
    }
});
notesRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'Missing id parameter.' });
    }
    try {
        await notes_service_1.default.deleteNote({ id }, user.email);
        return res.status(200).json({ message: 'Deleted note succesfully.' });
    }
    catch (err) {
        return res.status(500).json({ error: 'Internal server error.' });
    }
});
exports.default = notesRouter;
