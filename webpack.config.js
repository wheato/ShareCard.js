const webpack = require('webpack')
const path = require('path')
const env = process.env.NODE_ENV

const config = {
  mode: env,
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'sharecard.js',
    library: 'ShareCard',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  externals: []
}

if (env === 'production') {
}

module.exports = config
