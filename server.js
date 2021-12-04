// importing express package for the server framework
const express = require('express');
// importing file path resolution
const path = require('path');
const noteData = require('db.json');
const inquirer = require ('inquirer');

// creating out server object
const app = express ();
// defining the port variable
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// determines the supporting assets are getting pulled from
app.use(express.static('public'));

// GET http://localhost:3001/
app.get('/', (req,res) => res.send('/notes'));

// GET http://localhost:3001/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'));
});

// GET http://localhost:3001/
app.get('/api/notes', (req, res) => res.json(noteData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
