var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')

// Define mongoose connection
// local db connection var db = 'mongodb://localhost:27017/mycustomers'
// mlab db 
var db = 'mongodb://gear:satnam123@ds113942.mlab.com:13942/login'
mongoose.connect(db,(err)=>{
  if(!err){
    console.log("connected")
  }
})

// Import routers 

var indexRouter = require('./routes/index');
var studiesRouter = require('./routes/studies')
var jobsRouter = require('./routes/jobs')
var professorRouter = require('./routes/admin')
var labsRouter = require('./routes/labs')
var facultyRouter = require('./routes/faculty')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Assign the routes with handlers

app.use('/', indexRouter);
app.use('/admin',professorRouter)
app.use('/studies',studiesRouter)
app.use('/opportunities',jobsRouter)
app.use('/labs',labsRouter)
app.use('/faculty',facultyRouter)


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

module.exports = app;
