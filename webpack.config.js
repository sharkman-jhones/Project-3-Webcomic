var path = require('path');
 
module.exports = {
  entry: './app/app.js',

  output: {
    filename: 'public/bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /app/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  devtool: "eval-source-map"
};
