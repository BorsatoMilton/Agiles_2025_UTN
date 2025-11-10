const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        include: path.resolve('src'),
        exclude: [/node_modules/, /\.spec\.ts$/],
        enforce: 'post',
        use: {
          loader: 'coverage-istanbul-loader',
          options: {
            esModules: true,
          },
        },
      },
    ],
  },
};
