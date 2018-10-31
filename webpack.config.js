const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV = process.env.npm_lifecycle_event;
const isTest = ENV === 'test' || ENV === 'test-watch';
const isProd = ENV === 'build';

let plugins = [];
if (isProd) {
  plugins = [
    // Copy assets from the public folder
    // Reference: https://github.com/kevlened/copy-webpack-plugin
    new CopyWebpackPlugin([{
      from: __dirname + '/public'
    }])
  ]
}

module.exports = {

  mode: "development", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: isTest ? void 0 : "./src/app/app.component.js", // string | object | array
  // defaults to './src'
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "main.js", // string
    // the filename template for entry chunks
    publicPath: "",
    // the name of the exported library
    libraryTarget: "umd", // universal module definition
    // the type of the exported library
    /* Advanced output configuration (click to show) */
    pathinfo: true, // boolean
    // include useful path info about modules, exports, requests, etc. into the generated cod
    chunkFilename: "[id].js",
    // name of the JSONP function used to load chunks
    sourceMapFilename: "[file].map", // string
    // the filename template of the source map location
    devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string
    // the name template for modules in a devtool
    devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // string
    // the name template for modules in a devtool (used for conflicts)
    umdNamedDefine: true, // boolean
    // use a named AMD module in UMD library
    crossOriginLoading: "use-credentials", // enum
    // specifies how cross origin request are issued by the runtime
    /* Expert output configuration (on own risk) */
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          // apply multiple loaders and options
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              /* ... */
            }
          }
        ]
      }
    ],
    /* Advanced module configuration (click to show) */
    noParse: [
      /special-library\.js$/
    ],
    // do not parse this module
    unknownContextRequest: ".",
    unknownContextRecursive: true,
    unknownContextRegExp: /^\.\/.*$/,
    unknownContextCritical: true,
    exprContextRequest: ".",
    exprContextRegExp: /^\.\/.*$/,
    exprContextRecursive: true,
    exprContextCritical: true,
    wrappedContextRegExp: /.*/,
    wrappedContextRecursive: true,
    wrappedContextCritical: false,
    // specifies default behavior for dynamic requests
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // directories where to look for modules
    extensions: [".js", ".json", ".jsx", ".css"],
    /* alternative alias syntax (click to show) */
    alias: [
      {
        name: "module",
        // the old request
        alias: "new-module",
        // the new request
        onlyModule: true
        // if true only "module" is aliased
        // if false "module/inner/path" is also aliased
      }
    ],
    /* Advanced resolve configuration (click to show) */
    symlinks: true,
    // follow symlinks to new location
    descriptionFiles: ["package.json"],
    // files that are read for package description
    mainFields: ["main"],
    // properties that are read from description file
    // when a folder is requested
    aliasFields: ["browser"],
    // properties that are read from description file
    // to alias requests in this package
    enforceExtension: false,
    // if true request must not include an extensions
    // if false request may already include an extension
    moduleExtensions: ["-module"],
    enforceModuleExtension: false,
    // like extensions/enforceExtension but for module names instead of files
    unsafeCache: true,
    // enables caching for resolved requests
    // this is unsafe as folder structure may change
    // but performance improvement is really big
    cachePredicate: (path, request) => true,
    // predicate function which selects requests for caching
    plugins: []
    // additional plugins applied to the resolver
  },
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory
  target: "web", // enum
  stats: { //object
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true,
    // ...
  },
  // lets you precisely control what bundle information gets displayed
  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },
  plugins: plugins,
  // list of additional plugins
  resolveLoader: { /* same as resolve */ },
  // separate resolve options for loaders
  parallelism: 1, // number
  // limit the number of parallel processed modules
  profile: true, // boolean
  // capture timing information
  bail: true, //boolean
  // fail out on the first error instead of tolerating it.
  cache: false, // boolean
  // disable/enable caching
  watch: false, // boolean
  // enables watching
  watchOptions: {
    aggregateTimeout: 1000, // in ms
    // aggregates multiple changes to a single rebuild
    poll: true,
    // enables polling mode for watching
    // must be used on filesystems that doesn't notify on change
    // i. e. nfs shares
  },
  node: {
    // Polyfills and mocks to run Node.js-
    // environment code in non-Node environments.
    console: false, // boolean | "mock"
    global: true, // boolean | "mock"
    process: true, // boolean
    __filename: "mock", // boolean | "mock"
    __dirname: "mock", // boolean | "mock"
    Buffer: true, // boolean | "mock"
    setImmediate: true // boolean | "mock" | "empty"
  },
  recordsPath: path.resolve(__dirname, "build/records.json"),
  recordsInputPath: path.resolve(__dirname, "build/records.json"),
  recordsOutputPath: path.resolve(__dirname, "build/records.json"),
};
