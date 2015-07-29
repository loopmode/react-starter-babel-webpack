var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var open = require('opn');

var config = require('./webpack.config');
new WebpackDevServer(webpack(config), {
    contentBase: __dirname,
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
    },
}).listen(config.port, config.ip, function(err) {
    if (err) {
        return console.warn(err);
    }

    console.log('Listening at ' + config.ip + ':' + config.port);

    // launch in browser
    var previewPath = config.xaiUseWebpackFrame ? '/webpack-dev-server/bundle' : '';
    var url = 'http://' + config.ip + ':' + config.port + previewPath;
    open(url);
    console.info('Opened in browser: %s', url);

});

