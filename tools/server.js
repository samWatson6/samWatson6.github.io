// common server for both production and development
const historyApiFallback = require("connect-history-api-fallback");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const chalkSuccess = require("./chalkConfig");
const config = require("../webpack.config.dev");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const environment = process.argv[2];
const app = express();
const server = http.createServer(app);

/* eslint-disable no-console */
console.log(chalkSuccess(`Starting Express server in ${environment} mode...`));

if (environment !== "production") {
  // add a .env file in root of the project
  // require('dotenv').load({path: path.resolve(process.cwd() ,".env")});

  const bundler = webpack(config);

  app.use(express.static("src/*.html"));
  app.use(historyApiFallback());
  app.use(webpackHotMiddleware(bundler));
  app.use(
    webpackDevMiddleware(bundler, {
      // Dev middleware can't access config, so we provide publicPath
      publicPath: config.output.publicPath,

      // These settings suppress noisy webpack output so only errors are displayed to the console.
      noInfo: false,
      quiet: false,
      stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }

      // for other settings see
      // http://webpack.github.io/docs/webpack-dev-middleware.html
    })
  );
} else {
  app.use(express.static("dist"));
}

// set up env vars first
// require('../config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }));

server.listen(process.env.PORT || 8080);
/* eslint-disable no-console */
console.log(
  chalkSuccess("Express server is listening on port: " + server.address().port)
);
