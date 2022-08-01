const express = require('express');
const path = require('path');
const createError = require('http-errors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const logger = require('morgan');

// Set up mongoose connection
const mongoDB = "mongodb://127.0.0.1:27017/book-DB";

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(mongoDB, { 
  useNewUrlParser: true , 
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const catalogRouter = require('./routes/catalog');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// CREATE A PORT
const PORT = 3030;

// CREATE A SERVER
db.once("open", function () {
  console.log("You are Connected!");
  app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
  });
});

// module.exports = app;
