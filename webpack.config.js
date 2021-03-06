var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var apiHost;

var setupAPI = function() {
  switch (process.env.NODE_ENV) {
    case 'production' :
      apiHost = 'https://wearefabricated.com:3111';
      break;
    case 'development' :
      apiHost = 'http://localhost:3112';
      break;
  }

  console.log('process.env====', process.env.NODE_ENV);
};

setupAPI();


module.exports = {
  devtool: 'source-map',
  entry: {},
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.(scss|sass)$/, loader: 'style!css!sass' },
       { test: /\.css$/, loader: 'style!css' },
       {test: /\.(jpe?g|png|gif|svg)$/i, loader: "url-loader?name=client/img/[name].[ext]"}
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new webpack.DefinePlugin({
      _API_ : JSON.stringify(apiHost)
    }),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })

  ]
};
