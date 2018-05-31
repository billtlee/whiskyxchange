//import whiskyXChange from './ethereum/whiskyXChange';

const routes = require('next-routes')();

routes
  .add('/register', '/register')
  .add('/asset/newasset', '/asset/newasset')
  .add('/asset/:id/viewdetail', '/asset/viewdetail');

module.exports = routes;
