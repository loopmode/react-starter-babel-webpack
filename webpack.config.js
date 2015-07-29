const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const PAGE_TITLE = 'My App';

const TARGET = process.env.TARGET;

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

const LOADERS = {
    AUTOPREFIXER: 'autoprefixer-loader?{browsers:["last 2 version"]}',
    STYLE: 'style',
    CSS: 'css?localIdentName=[path][name]---[local]---[hash:base64:5]',
    SASS: 'sass?sourceMap&includePaths[]=' + SRC_PATH,
    BABEL: 'babel',
    IMPORTS: 'imports-loader?define=>false',
    ESLINT: 'eslint',
    HOT: 'react-hot',
    FLOWCHECK: 'flowcheck'
};

const DEV_SERVER = {
    IP: '127.0.0.1',
    PORT: 8080,
    LOADERS: [
        LOADERS.HOT,
        LOADERS.BABEL,
        LOADERS.FLOWCHECK,
        'babel?blacklist=flow'
    ]
};

const CONFIG_DEFAULT = {
    entry: [path.join(SRC_PATH, 'main.js')],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: SRC_PATH
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: [LOADERS.STYLE, LOADERS.CSS, LOADERS.AUTOPREFIXER],
        }, {
            test: /\.scss$/,
            loaders: [LOADERS.STYLE, LOADERS.CSS, LOADERS.SASS, LOADERS.AUTOPREFIXER],
        }, {
            test: /\.jsx?$/,
            loader: LOADERS.BABEL,
            include: SRC_PATH,
        }, {
            test: /isotope/,
            loader: LOADERS.IMPORTS
        }],
    },
};

const CONFIG_BUILD = {
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: LOADERS.BABEL,
            include: SRC_PATH,
        }, ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production') // This has effect on the react lib size
            }
        }),
        new HtmlWebpackPlugin({
            title: PAGE_TITLE
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        }),
    ],
};

const CONFIG_DEV = {
    xaiUseWebpackFrame: false,

    ip: DEV_SERVER.IP,
    port: DEV_SERVER.PORT,
    entry: [
        'webpack-dev-server/client?http://' + DEV_SERVER.IP + ':' + DEV_SERVER.PORT,
        'webpack/hot/only-dev-server',
    ],
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loaders: [LOADERS.ESLINT],
            include: SRC_PATH
        }, ],
        loaders: [{
            test: /\.jsx?$/,
            loaders: DEV_SERVER.LOADERS,
            include: SRC_PATH,
        }, ],
    },
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: PAGE_TITLE
        }),
    ],
};

const CONFIG_KARMA = {
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: LOADERS.BABEL,
            include: SRC_PATH
        }]
    },
    watch: true
};

const CONFIGS = {
    DEFAULT: CONFIG_DEFAULT,
    DEV: merge(CONFIG_DEFAULT, CONFIG_DEV),
    KARMA: merge(CONFIG_DEFAULT, CONFIG_KARMA),
    BUILD: merge(CONFIG_DEFAULT, CONFIG_BUILD),
};

module.exports = CONFIGS[TARGET.toUpperCase()] || CONFIGS.DEFAULT;

