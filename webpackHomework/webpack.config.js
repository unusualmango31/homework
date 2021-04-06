const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: __dirname + "/public/js",
        filename: 'bundle.js'
  }
};