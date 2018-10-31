// common server for both production and development

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();
const server = http.createServer(app);

/* eslint-disable no-console */

// for other settings see
// http://webpack.github.io/docs/webpack-dev-middleware.html

app.use(express.static("dist"));

app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html'))

// set up env vars first
// require('../config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }));

server.listen(process.env.PORT || 8080);
/* eslint-disable no-console */
