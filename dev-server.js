const webpackDevServer = require('webpack-dev-server');
const webpack  = require('webpack');

const config = require('./webpack.config.js');
const host = 'localhost';
const options = {
  contentBase: './dist',
  hot: true,
  host: host,
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(8080, host, () => {
  console.log('dev server listening on port 8080');
});