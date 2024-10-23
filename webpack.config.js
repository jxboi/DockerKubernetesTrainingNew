// webpack.config.js

const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
  // The entry point of your application
  entry: './src/main.js',

  // The output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Module and rules configuration
  module: {
    rules: [
      // Rule for .vue files (standard processing)
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader',
      },
      // Rule for .vue files when '?raw' is appended to the import
      {
        test: /\.vue$/,
        resourceQuery: /raw/, // Only apply this rule when '?raw' is present
        use: 'raw-loader',
      },
      // Rule for JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // Rule for CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Rule for other asset files (images, fonts, etc.)
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },

  // Resolve configurations
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // Alias for Vue to ensure the compiler version is used
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
    },
  },

  // Plugins configuration
  plugins: [
    // Vue Loader plugin is required for Vue.js components
    new VueLoaderPlugin(),
  ],

  // Development server configuration (optional)
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },

  // Source maps configuration
  devtool: 'source-map',
};
