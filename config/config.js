const express = require('express');
const session = require('express-session');
const sessionFileStore = require('session-file-store');
const cookieParser = require('cookie-parser');
const path = require('path');
const hbs = require('hbs');

const FileStore = sessionFileStore(session);
// файловое хранилище

const config = (app) => {
  app.set('view engine', 'hbs');
  hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));
  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());
  app.use(express.static(path.join(process.env.PWD, 'public')));
  app.use(cookieParser());
  app.use(session({
    key: 'user_uid',
    secret: 'ourTeamLeadTheBest',
    store: new FileStore({ logFn() { } }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000 * 60 * 60 * 12,
      httpOnly: true,
    },
  }));
};
module.exports = config;
