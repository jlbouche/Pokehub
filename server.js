var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// session middleware
var session = require('express-session');
var passport = require('passport');
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
var methodOverride = require('method-override');

// define routes
var indexRoute = require('./routes/index');
var pokemonRoute = require('./routes/pokemons');
var notesRoute = require('./routes/notes');
var researcherRoute = require('./routes/researchers');
var teamsRoute = require('./routes/teams');
const { config } = require('dotenv');

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');
// configure Passport
require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// mount the session middleware
app.use(session({
  secret: 'Pokehub!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Custom middleware that passes req.user to all templates
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

// mount all routes with appropriate base paths
app.use('/', indexRoute);
app.use('/pokemons', pokemonRoute);
app.use('/', notesRoute);
app.use('/researchers', researcherRoute);
app.use('/', teamsRoute);

// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send("Can't find that!");
});

module.exports = app;
