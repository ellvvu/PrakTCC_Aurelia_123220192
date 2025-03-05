// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const UserRoutes = require('./routes/UserRoutes');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', UserRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});