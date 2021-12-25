# NoteTakerProject

## Installing the folders

The folders I needed to install were the db, helpers, middleware, node_modules, public, and routes

The db folder has the db.json inside which were needed for the ApiRoutes; the get, post, and delete routes.
The db folder also helps to read from the file in the server.js. 

## Installing the software

In the package.son I had to make sure the express server was installed and on the server.js.
inquirer needed to be installed, path, save, start, and uuid. 

## Routes

In the routes folder the apiRoutes.js is needed to readFromFile, readAndAppend, and writeToFile. In the apiRoutes will help us get the notes, post the notes, and delete the routes.

## Server.js

I imported server.js to connect to express, path, middleware, and the routes. I had to define the port varible wich is 3001.
Next, I had to create a server object through express and import custom middleware, "cLog"
I had to make sure I could get the notes and get to the notes page by connecting the public/notes.html to the public/index.html
Lastly, I had to get the app to listen to the port varible through the local host

## Acceptace Criteria

When you let the app run through the local host, the landing page will be the note taker.
After clicking "Get Started" the second page will be the notes page.
On the notes page you can add a title to your note and the text to go with it 
when you start typing the text to the note the save button will appear on the upper right hand corner.
After you click save, the save note will appear on the left hand side.

Currently working on the to be deleted ..


## Deployed Links



