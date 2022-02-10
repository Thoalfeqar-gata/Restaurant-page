const path = require('path');
module.exports = {
  mode : 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: "inline-source-map",
  devServer: {
    static: './dist',
  },
  module:
  {
    rules : [
        {
            test : /\.(png|jpg)/i,
            type : "asset/resource",
        },
        {
            test : /\.css/i,
            use : ["style-loader", "css-loader"],
        }
    ],
  },
};