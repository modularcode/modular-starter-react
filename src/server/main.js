/**
 * Main application file
 */

'use strict';

/****************************************
*          External Modules
****************************************/

const express = require('express');
const path = require('path');

/****************************************
*         Constant definition
****************************************/

global.ROOT_DIR = path.resolve(__dirname, '../../');
global.CLIENT_DIR = path.resolve(__dirname, '../client');
global.PUBLIC_DIR = path.resolve(__dirname, '../../public');
global.SERVER_DIR = path.resolve(__dirname);
global.API_DIR = path.resolve(__dirname, '/api');

/****************************************
*       Environment Variables
****************************************/

const ENV = require('dotenv').load({
  path: path.resolve(ROOT_DIR, ".env"),
  silent: true
});

/****************************************
*          Internal Modules
****************************************/

const config = require('./config/config');
const configTemplateEngine = require('./config/config-express-template-engine');
const configExpress = require('./config/config-express');
const router = require('./router');
const api = require('./api/api');

/****************************************
*         Configuring express
****************************************/

const app = new express();

// var forceSsl = function (req, res, next) {
//   if (req.headers['x-forwarded-proto'] !== 'https') {
//     return res.redirect(['https://', req.get('Host'), req.url].join(''));
//   }
//   return next();
// };

// console.log("ENV:", process.env.ENV);

// if (process.env.ENV === 'production') {
//   console.log("SHOULD REDIREC TO https");
//   app.use(forceSsl);
// }

// Load express configurations
configExpress(app);

// Load express template configurations
// configTemplateEngine(app);

// Load router
router(app);

/****************************************
*           Running Web Server
*****************************************/

// Create server
const server = require('http').createServer(app);

// Start server
server.listen(config.PORT, function () {
  console.log('Express server listening on %d', 4000);
});


// Export app
module.exports = app;