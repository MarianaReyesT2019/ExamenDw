var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var teachersRouter = require('./routes/Maestros')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set("view engine", "ejs")

//Middlewares.
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/teachers', teachersRouter);

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


import React from 'react';
import Gallery from './Gallery';

const images = [
  'url_imagen_1.jpg',
  'url_imagen_2.jpg',
  'url_imagen_3.jpg',

];

function App() {
  return (
    <div className="App">
      <Gallery images={images} />
    </div>
  );
}

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import CRUD from './CRUD'; // Asume que tienes un componente para el CRUD
import Gallery from './Gallery'; // Asume que tienes un componente para la galería

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/Mestross">
            <CRUD />
          </Route>
          <Route path="/Gallery">
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




export default App;




