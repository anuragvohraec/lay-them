const path = require('path');

module.exports = {
    mode:"production",
  entry: {
      "laythem-min-3.0.5": './src/LayThem.ts'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js' ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  }
};