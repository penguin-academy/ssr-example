module.exports = {
  entry: { home: './src/client/home.tsx' },
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
  },
  devServer: {
    proxy: {
      '**/*': {
        target: 'http://localhost:3000',
        bypass: req => {
          if (req.headers.accept.indexOf('html')) return
          return req.url
        }
      }
    }
  }
}
