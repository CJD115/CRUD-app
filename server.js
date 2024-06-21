// Load env variables
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

// Import dependencies
const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/connectToDb');
const notesController = require('./controllers/notesController')

// Create express app
const app = express();

// Configure express app
app.use(express.json())
app.use(cors())

// Connect to database
connectToDb();

// Routing
// Get all notes
app.get('/notes'  , notesController.fetchNotes);

// Fetch a note by ID
app.get('/notes/:id', notesController.createNote);

// Create a new note
app.post('/notes', notesController.createNote);
// Update a note by ID
app.put('/notes/:id', notesController.updateNote);

// Delete a note by ID
app.delete('/notes/:id', notesController.deleteNote);

// start server
app.listen(process.env.PORT)