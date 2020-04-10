module.exports = {
  entry: { bundle: './src/client/home.tsx' },
  output: { path: __dirname + '/public' },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader')
      }
    ]
  }
}
