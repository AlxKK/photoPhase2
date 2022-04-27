const express = require('express');
const hbs = require('hbs');

const path = require('path');
const session = require('express-session');
const sessionFileStore = require('session-file-store');
const FileStore = sessionFileStore(session);





const config = (app) => {
  app.set('view engine', 'hbs');
  app.set('views', path.join(process.env.PWD, 'views'));

  // hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(process.env.PWD, 'public')));



  
  app.use(
    session({
      store: new FileStore(),
      name: 'user_sid',
      key: app.get('session cookie name'),
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 10e3 * 60, httpOnly: true },
    }),
  );
};

module.exports = config;
