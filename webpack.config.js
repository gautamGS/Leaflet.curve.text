const path = require('path');

module.exports = {
  entry: './leaflet.curve.text.js',
  output: {
    filename: 'leaflet.curve.text.js',
    path: path.resolve(__dirname, 'dist')
  }
};
