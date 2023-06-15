"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notesRouter = (0, express_1.Router)();
notesRouter.get('/', (req, res) => {
    return res.json({ message: 'Notes router is working.' });
});
exports.default = notesRouter;
