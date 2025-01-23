const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'bundle.js', // Name of the bundled JavaScript file
    clean: true, // Automatically clean the output directory before building
    assetModuleFilename: 'assets/[name][ext]', // Folder structure for assets
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpiling JavaScript
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'], // Loaders for injecting CSS into the DOM
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Handle image files
        type: 'asset/resource', // Output image files to the 'assets' folder
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Handle font files
        type: 'asset/resource', // Output font files to the 'assets' folder
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template file for HTML
      filename: 'index.html', // Output HTML file name
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from the 'dist' folder
    },
    port: 3001, // Port for the development server
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
    compress: true, // Enable gzip compression for better performance
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve JavaScript and JSX files
  },
  mode: 'development', // Development mode for better debugging
};