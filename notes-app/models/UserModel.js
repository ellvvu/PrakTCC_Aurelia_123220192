// models/UserModel.js
const pool = require('../config/database');

class UserModel {
    static async getAllNotes() {
        const [rows] = await pool.query('SELECT * FROM notes');
        return rows;
    }

    static async getNoteById(id) {
        const [rows] = await pool.query('SELECT * FROM notes WHERE id = ?', [id]);
        return rows[0];
    }

    static async addNote(title, content) {
        const [result] = await pool.query(
            'INSERT INTO notes (title, content) VALUES (?, ?)',
            [title, content]
        );
        return { id: result.insertId, title, content };
    }

    static async updateNote(id, title, content) {
        await pool.query(
            'UPDATE notes SET title = ?, content = ? WHERE id = ?',
            [title, content, id]
        );
        return { id, title, content };
    }

    static async deleteNote(id) {
        await pool.query('DELETE FROM notes WHERE id = ?', [id]);
        return true;
    }
}

module.exports = UserModel;