const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000, 
    headers: {
      'Content-Security-Policy' : [ `script-src 'self' 'report-sample' http://localhost:*;`
      ],
    }
  }
}
