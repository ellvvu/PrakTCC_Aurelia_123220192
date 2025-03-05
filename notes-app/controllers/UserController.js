// controllers/UserController.js
const UserModel = require('../models/UserModel');

class UserController {
    static async getAllNotes(req, res) {
        const notes = await UserModel.getAllNotes();
        res.json(notes);
    }

    static async getNoteById(req, res) {
        const noteId = parseInt(req.params.id);
        const note = await UserModel.getNoteById(noteId);
        if (note) {
            res.json(note);
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    }

    static async addNote(req, res) {
        const { title, content } = req.body;
        const newNote = await UserModel.addNote(title, content);
        res.status(201).json(newNote);
    }

    static async updateNote(req, res) {
        const noteId = parseInt(req.params.id);
        const { title, content } = req.body;
        const updatedNote = await UserModel.updateNote(noteId, title, content);
        if (updatedNote) {
            res.json(updatedNote);
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    }

    static async deleteNote(req, res) {
        const noteId = parseInt(req.params.id);
        const isDeleted = await UserModel.deleteNote(noteId);
        if (isDeleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    }
}

module.exports = UserController;