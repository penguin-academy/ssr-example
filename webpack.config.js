const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    home: './src/client/home.tsx',
    styles: './src/client/styles.css'
  },
  output: { path: __dirname + '/public' },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          require.resolve('css-loader'),
          require.resolve('postcss-loader')
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
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
