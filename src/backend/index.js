const express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser');
    
const path = __dirname + '/../../build/';
app.use(express.static(path));
app.get('/', function (req, res) {
    res.sendFile(path, "index.html");
});

// setup database
const mysql = require('mysql');
db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Welcome1',
    database: 'funny_movies_db'
})
// make server object that contain port property and the value for our server.
var server = {
    port: 3000
};

// routers
const usersRouter = require('./routes/users');
const videosRouter = require('./routes/videos');
// const usersRouter = require('./src/backend/routes/user');

// use the modules
app.use(cors())
app.use(bodyParser.json());

// use router
app.use('/api/users', usersRouter);
app.use('/api/videos', videosRouter);

// starting the server
app.listen(server.port, () => console.log(`Server started, listening port: ${server.port}`));