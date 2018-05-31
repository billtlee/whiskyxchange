require('./config/config');
const port = process.env.PORT;
const { MongoClient } = require('mongodb');
const api = require('./lib/api');
const next = require('next');
const app = next({
  dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);
const express = require('express');
const co = require('co');
const body = require('body-parser');
const mongoose = require('mongoose');
// const { mongoose } = require('./datastore/db/mongoose');

co(function* () {
  yield app.prepare();

  // mongoose.promise = global.Promise;
  // mongoose.connect(process.env.MONGODB_URI);
  const client =  yield MongoClient.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
  const db = client.db('Whisky');

  const server = express();
  server.use(body.json());
  server.use((req, res, next) => {
    req.mongodburi = process.env.MONGODB_URI;
    req.db = db;
    next();
  });
  server.use('/api', api(db));

  server.get('*', (req, res) => {
    return handler(req, res);
  });

  server.listen(port);
  console.log(`Listening on ${port}`);
}).catch(error => console.error(error.stack));
