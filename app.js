var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Setup database in knex
const db = require('knex')({
	client: 'mysql2',
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_SCHEMA
	}
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors()); // Hopefully this will help our remote stuff, which I doubt

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
