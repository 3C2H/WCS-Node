var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

  // ask for age & return DOB
process.stdin.resume()
process.stdin.setEncoding('utf8')

const anneeCourante = 2018;
let age = 0;

console.log('What\'s your age ? ');

process.stdin.on('data', (age) => {
	if (isNaN(age)) {
		console.log("Value must be a number, learn to read N@@b");
  		process.exit();	
	}
	else if (age > 99 || age <= 0) {
		console.log("this test doesn\'t apply to mummies or unborns :o");
	  	process.exit();
	}
	else {
		let	DoB = (anneeCourante - age);
		DoB = Math.round(DoB);	
		console.log("ah so you\'re born in " + DoB);
	}

  // process.exit();
})

module.exports = app;
