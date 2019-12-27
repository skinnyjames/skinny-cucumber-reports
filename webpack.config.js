module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js",".jsx",".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [ { loader: "ts-loader" } ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
}