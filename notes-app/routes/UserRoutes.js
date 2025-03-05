// routes/UserRoutes.js
const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

// Define routes
router.get('/notes', UserController.getAllNotes);
router.get('/notes/:id', UserController.getNoteById);
router.post('/notes', UserController.addNote);
router.put('/notes/:id', UserController.updateNote);
router.delete('/notes/:id', UserController.deleteNote);

module.exports = router;