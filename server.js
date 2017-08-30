const express = require('express');
const port = process.env.PORT || 3050

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpacConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpacConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  })
}

app.listen(port, () => console.log(`listening on ${ port }`));
