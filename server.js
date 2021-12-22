// importing express package for the server framework
const express = require('express');
// importing file path resolution
const path = require('path');
// const noteData = require('./db/db.json');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

// defining the port variable
const PORT =  process.env.PORT || 3001;

// creating out server object
const app = express();

// Import custom middleware, "cLog"
app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
// determines the supporting assets are getting pulled from
app.use(express.static('public'));

// HTML ROUTES
// GET http://localhost:3001/notes
// changed '/' to '/notes'



app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

//app.get('/', (req,res) => res.send('/notes'));
// GET http://localhost:3001/api/notes?
// created a route??? where did noteData come from?
// do hi have to add the res.sendFile ?

// API ROUTES
//app.get('/api/notes', (req, res) => res.json(noteData));

// API POST ROUTE


// API DELETE ROUTE

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

// how to attach the front end to the back end
// how to GET * to return the index.html ?
// what does the * represent ?
