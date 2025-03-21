{
  mode: 'production',
  context: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot',
  devtool: 'source-map',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\dist',
    filename: 'js/[name].[contenthash:8].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[contenthash:8].js'
  },
  resolve: {
    alias: {
      '@': 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\src',
      vue$: 'vue/dist/vue.runtime.esm-bundler.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules',
      'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ┬п\_(уГД)_/┬п
        },
        makePlugin: function () { /* omitted long function */ },
        moduleLoader: function () { /* omitted long function */ },
        topLevelLoader: {
          apply: function nothing() {
            // ┬п\_(уГД)_/┬п
          }
        },
        bind: function () { /* omitted long function */ },
        tsLoaderOptions: function () { /* omitted long function */ },
        forkTsCheckerOptions: function () { /* omitted long function */ }
      }
    ]
  },
  resolveLoader: {
    modules: [
      'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules',
      'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ┬п\_(уГД)_/┬п
        }
      }
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('mjs') */
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
        include: [
          /node_modules/
        ]
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '77e7a5da'
            }
          },
          {
            loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\vue-loader-v16\\dist\\index.js',
            options: {
              cacheDirectory: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '77e7a5da',
              babelParserPlugins: [
                'jsx',
                'classProperties',
                'decorators-legacy'
              ]
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\file-loader\\dist\\cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    load: function () { /* omitted long function */ },
                    compile: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileString: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileStringAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initAsyncCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    Compiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    AsyncCompiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    Value: function Value0() {
                    },
                    SassBoolean: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassArgumentList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassCalculation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationOperation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationInterpolation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassColor: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassFunction: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMixin: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMap: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassNumber: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassString: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    sassNull: {},
                    sassTrue: {
                      value: true
                    },
                    sassFalse: {
                      value: false
                    },
                    Exception: function () { /* omitted long function */ },
                    Logger: {
                      silent: {
                        warn: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        },
                        debug: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        }
                      }
                    },
                    NodePackageImporter: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    deprecations: {
                      'call-string': {
                        id: 'call-string',
                        status: 'active',
                        description: 'Passing a string directly to meta.call().',
                        deprecatedIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        },
                        obsoleteIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        }
                      },
                      elseif: {
                        id: 'elseif',
                        status: 'active',
                        description: '@elseif.',
                        deprecatedIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        }
                      },
                      'moz-document': {
                        id: 'moz-document',
                        status: 'active',
                        description: '@-moz-document.',
                        deprecatedIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        }
                      },
                      'relative-canonical': {
                        id: 'relative-canonical',
                        status: 'active',
                        description: 'Imports using relative canonical URLs.',
                        deprecatedIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        }
                      },
                      'new-global': {
                        id: 'new-global',
                        status: 'active',
                        description: 'Declaring new variables with !global.',
                        deprecatedIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        }
                      },
                      'color-module-compat': {
                        id: 'color-module-compat',
                        status: 'active',
                        description: 'Using color module functions in place of plain CSS functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        }
                      },
                      'slash-div': {
                        id: 'slash-div',
                        status: 'active',
                        description: '/ operator for division.',
                        deprecatedIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        }
                      },
                      'bogus-combinators': {
                        id: 'bogus-combinators',
                        status: 'active',
                        description: 'Leading, trailing, and repeated combinators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        }
                      },
                      'strict-unary': {
                        id: 'strict-unary',
                        status: 'active',
                        description: 'Ambiguous + and - operators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        }
                      },
                      'function-units': {
                        id: 'function-units',
                        status: 'active',
                        description: 'Passing invalid units to built-in functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        }
                      },
                      'duplicate-var-flags': {
                        id: 'duplicate-var-flags',
                        status: 'active',
                        description: 'Using !default or !global multiple times for one variable.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        }
                      },
                      'null-alpha': {
                        id: 'null-alpha',
                        status: 'active',
                        description: 'Passing null as alpha in the JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        }
                      },
                      'abs-percent': {
                        id: 'abs-percent',
                        status: 'active',
                        description: 'Passing percentages to the Sass abs() function.',
                        deprecatedIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        }
                      },
                      'fs-importer-cwd': {
                        id: 'fs-importer-cwd',
                        status: 'active',
                        description: 'Using the current working directory as an implicit load path.',
                        deprecatedIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        }
                      },
                      'css-function-mixin': {
                        id: 'css-function-mixin',
                        status: 'active',
                        description: 'Function and mixin names beginning with --.',
                        deprecatedIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        }
                      },
                      'mixed-decls': {
                        id: 'mixed-decls',
                        status: 'active',
                        description: 'Declarations after or between nested rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        }
                      },
                      'feature-exists': {
                        id: 'feature-exists',
                        status: 'active',
                        description: 'meta.feature-exists',
                        deprecatedIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        }
                      },
                      'color-4-api': {
                        id: 'color-4-api',
                        status: 'active',
                        description: 'Certain uses of built-in sass:color functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'color-functions': {
                        id: 'color-functions',
                        status: 'active',
                        description: 'Using global color functions instead of sass:color.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'legacy-js-api': {
                        id: 'legacy-js-api',
                        status: 'active',
                        description: 'Legacy JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'import': {
                        id: 'import',
                        status: 'active',
                        description: '@import rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'global-builtin': {
                        id: 'global-builtin',
                        status: 'active',
                        description: 'Global built-in functions that are available in sass: modules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'user-authored': {
                        id: 'user-authored',
                        status: 'user',
                        description: null,
                        deprecatedIn: null,
                        obsoleteIn: null
                      }
                    },
                    Version: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    loadParserExports_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.85.1\t(Sass Compiler)\t[Dart]\ndart2js\t3.7.0\t(Dart Compiler)\t[Dart]',
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    types: {
                      Boolean: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {},
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    load: function () { /* omitted long function */ },
                    compile: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileString: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileStringAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initAsyncCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    Compiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    AsyncCompiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    Value: function Value0() {
                    },
                    SassBoolean: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassArgumentList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassCalculation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationOperation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationInterpolation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassColor: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassFunction: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMixin: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMap: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassNumber: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassString: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    sassNull: {},
                    sassTrue: {
                      value: true
                    },
                    sassFalse: {
                      value: false
                    },
                    Exception: function () { /* omitted long function */ },
                    Logger: {
                      silent: {
                        warn: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        },
                        debug: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        }
                      }
                    },
                    NodePackageImporter: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    deprecations: {
                      'call-string': {
                        id: 'call-string',
                        status: 'active',
                        description: 'Passing a string directly to meta.call().',
                        deprecatedIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        },
                        obsoleteIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        }
                      },
                      elseif: {
                        id: 'elseif',
                        status: 'active',
                        description: '@elseif.',
                        deprecatedIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        }
                      },
                      'moz-document': {
                        id: 'moz-document',
                        status: 'active',
                        description: '@-moz-document.',
                        deprecatedIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        }
                      },
                      'relative-canonical': {
                        id: 'relative-canonical',
                        status: 'active',
                        description: 'Imports using relative canonical URLs.',
                        deprecatedIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        }
                      },
                      'new-global': {
                        id: 'new-global',
                        status: 'active',
                        description: 'Declaring new variables with !global.',
                        deprecatedIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        }
                      },
                      'color-module-compat': {
                        id: 'color-module-compat',
                        status: 'active',
                        description: 'Using color module functions in place of plain CSS functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        }
                      },
                      'slash-div': {
                        id: 'slash-div',
                        status: 'active',
                        description: '/ operator for division.',
                        deprecatedIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        }
                      },
                      'bogus-combinators': {
                        id: 'bogus-combinators',
                        status: 'active',
                        description: 'Leading, trailing, and repeated combinators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        }
                      },
                      'strict-unary': {
                        id: 'strict-unary',
                        status: 'active',
                        description: 'Ambiguous + and - operators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        }
                      },
                      'function-units': {
                        id: 'function-units',
                        status: 'active',
                        description: 'Passing invalid units to built-in functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        }
                      },
                      'duplicate-var-flags': {
                        id: 'duplicate-var-flags',
                        status: 'active',
                        description: 'Using !default or !global multiple times for one variable.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        }
                      },
                      'null-alpha': {
                        id: 'null-alpha',
                        status: 'active',
                        description: 'Passing null as alpha in the JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        }
                      },
                      'abs-percent': {
                        id: 'abs-percent',
                        status: 'active',
                        description: 'Passing percentages to the Sass abs() function.',
                        deprecatedIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        }
                      },
                      'fs-importer-cwd': {
                        id: 'fs-importer-cwd',
                        status: 'active',
                        description: 'Using the current working directory as an implicit load path.',
                        deprecatedIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        }
                      },
                      'css-function-mixin': {
                        id: 'css-function-mixin',
                        status: 'active',
                        description: 'Function and mixin names beginning with --.',
                        deprecatedIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        }
                      },
                      'mixed-decls': {
                        id: 'mixed-decls',
                        status: 'active',
                        description: 'Declarations after or between nested rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        }
                      },
                      'feature-exists': {
                        id: 'feature-exists',
                        status: 'active',
                        description: 'meta.feature-exists',
                        deprecatedIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        }
                      },
                      'color-4-api': {
                        id: 'color-4-api',
                        status: 'active',
                        description: 'Certain uses of built-in sass:color functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'color-functions': {
                        id: 'color-functions',
                        status: 'active',
                        description: 'Using global color functions instead of sass:color.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'legacy-js-api': {
                        id: 'legacy-js-api',
                        status: 'active',
                        description: 'Legacy JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'import': {
                        id: 'import',
                        status: 'active',
                        description: '@import rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'global-builtin': {
                        id: 'global-builtin',
                        status: 'active',
                        description: 'Global built-in functions that are available in sass: modules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'user-authored': {
                        id: 'user-authored',
                        status: 'user',
                        description: null,
                        deprecatedIn: null,
                        obsoleteIn: null
                      }
                    },
                    Version: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    loadParserExports_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.85.1\t(Sass Compiler)\t[Dart]\ndart2js\t3.7.0\t(Dart Compiler)\t[Dart]',
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    types: {
                      Boolean: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {},
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    load: function () { /* omitted long function */ },
                    compile: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileString: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileStringAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initAsyncCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    Compiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    AsyncCompiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    Value: function Value0() {
                    },
                    SassBoolean: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassArgumentList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassCalculation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationOperation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationInterpolation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassColor: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassFunction: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMixin: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMap: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassNumber: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassString: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    sassNull: {},
                    sassTrue: {
                      value: true
                    },
                    sassFalse: {
                      value: false
                    },
                    Exception: function () { /* omitted long function */ },
                    Logger: {
                      silent: {
                        warn: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        },
                        debug: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        }
                      }
                    },
                    NodePackageImporter: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    deprecations: {
                      'call-string': {
                        id: 'call-string',
                        status: 'active',
                        description: 'Passing a string directly to meta.call().',
                        deprecatedIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        },
                        obsoleteIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        }
                      },
                      elseif: {
                        id: 'elseif',
                        status: 'active',
                        description: '@elseif.',
                        deprecatedIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        }
                      },
                      'moz-document': {
                        id: 'moz-document',
                        status: 'active',
                        description: '@-moz-document.',
                        deprecatedIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        }
                      },
                      'relative-canonical': {
                        id: 'relative-canonical',
                        status: 'active',
                        description: 'Imports using relative canonical URLs.',
                        deprecatedIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        }
                      },
                      'new-global': {
                        id: 'new-global',
                        status: 'active',
                        description: 'Declaring new variables with !global.',
                        deprecatedIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        }
                      },
                      'color-module-compat': {
                        id: 'color-module-compat',
                        status: 'active',
                        description: 'Using color module functions in place of plain CSS functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        }
                      },
                      'slash-div': {
                        id: 'slash-div',
                        status: 'active',
                        description: '/ operator for division.',
                        deprecatedIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        }
                      },
                      'bogus-combinators': {
                        id: 'bogus-combinators',
                        status: 'active',
                        description: 'Leading, trailing, and repeated combinators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        }
                      },
                      'strict-unary': {
                        id: 'strict-unary',
                        status: 'active',
                        description: 'Ambiguous + and - operators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        }
                      },
                      'function-units': {
                        id: 'function-units',
                        status: 'active',
                        description: 'Passing invalid units to built-in functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        }
                      },
                      'duplicate-var-flags': {
                        id: 'duplicate-var-flags',
                        status: 'active',
                        description: 'Using !default or !global multiple times for one variable.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        }
                      },
                      'null-alpha': {
                        id: 'null-alpha',
                        status: 'active',
                        description: 'Passing null as alpha in the JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        }
                      },
                      'abs-percent': {
                        id: 'abs-percent',
                        status: 'active',
                        description: 'Passing percentages to the Sass abs() function.',
                        deprecatedIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        }
                      },
                      'fs-importer-cwd': {
                        id: 'fs-importer-cwd',
                        status: 'active',
                        description: 'Using the current working directory as an implicit load path.',
                        deprecatedIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        }
                      },
                      'css-function-mixin': {
                        id: 'css-function-mixin',
                        status: 'active',
                        description: 'Function and mixin names beginning with --.',
                        deprecatedIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        }
                      },
                      'mixed-decls': {
                        id: 'mixed-decls',
                        status: 'active',
                        description: 'Declarations after or between nested rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        }
                      },
                      'feature-exists': {
                        id: 'feature-exists',
                        status: 'active',
                        description: 'meta.feature-exists',
                        deprecatedIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        }
                      },
                      'color-4-api': {
                        id: 'color-4-api',
                        status: 'active',
                        description: 'Certain uses of built-in sass:color functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'color-functions': {
                        id: 'color-functions',
                        status: 'active',
                        description: 'Using global color functions instead of sass:color.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'legacy-js-api': {
                        id: 'legacy-js-api',
                        status: 'active',
                        description: 'Legacy JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'import': {
                        id: 'import',
                        status: 'active',
                        description: '@import rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'global-builtin': {
                        id: 'global-builtin',
                        status: 'active',
                        description: 'Global built-in functions that are available in sass: modules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'user-authored': {
                        id: 'user-authored',
                        status: 'user',
                        description: null,
                        deprecatedIn: null,
                        obsoleteIn: null
                      }
                    },
                    Version: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    loadParserExports_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.85.1\t(Sass Compiler)\t[Dart]\ndart2js\t3.7.0\t(Dart Compiler)\t[Dart]',
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    types: {
                      Boolean: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {},
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    load: function () { /* omitted long function */ },
                    compile: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileString: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileStringAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initAsyncCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    Compiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    AsyncCompiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    Value: function Value0() {
                    },
                    SassBoolean: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassArgumentList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassCalculation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationOperation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationInterpolation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassColor: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassFunction: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMixin: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMap: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassNumber: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassString: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    sassNull: {},
                    sassTrue: {
                      value: true
                    },
                    sassFalse: {
                      value: false
                    },
                    Exception: function () { /* omitted long function */ },
                    Logger: {
                      silent: {
                        warn: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        },
                        debug: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        }
                      }
                    },
                    NodePackageImporter: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    deprecations: {
                      'call-string': {
                        id: 'call-string',
                        status: 'active',
                        description: 'Passing a string directly to meta.call().',
                        deprecatedIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        },
                        obsoleteIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        }
                      },
                      elseif: {
                        id: 'elseif',
                        status: 'active',
                        description: '@elseif.',
                        deprecatedIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        }
                      },
                      'moz-document': {
                        id: 'moz-document',
                        status: 'active',
                        description: '@-moz-document.',
                        deprecatedIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        }
                      },
                      'relative-canonical': {
                        id: 'relative-canonical',
                        status: 'active',
                        description: 'Imports using relative canonical URLs.',
                        deprecatedIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        }
                      },
                      'new-global': {
                        id: 'new-global',
                        status: 'active',
                        description: 'Declaring new variables with !global.',
                        deprecatedIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        }
                      },
                      'color-module-compat': {
                        id: 'color-module-compat',
                        status: 'active',
                        description: 'Using color module functions in place of plain CSS functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        }
                      },
                      'slash-div': {
                        id: 'slash-div',
                        status: 'active',
                        description: '/ operator for division.',
                        deprecatedIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        }
                      },
                      'bogus-combinators': {
                        id: 'bogus-combinators',
                        status: 'active',
                        description: 'Leading, trailing, and repeated combinators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        }
                      },
                      'strict-unary': {
                        id: 'strict-unary',
                        status: 'active',
                        description: 'Ambiguous + and - operators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        }
                      },
                      'function-units': {
                        id: 'function-units',
                        status: 'active',
                        description: 'Passing invalid units to built-in functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        }
                      },
                      'duplicate-var-flags': {
                        id: 'duplicate-var-flags',
                        status: 'active',
                        description: 'Using !default or !global multiple times for one variable.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        }
                      },
                      'null-alpha': {
                        id: 'null-alpha',
                        status: 'active',
                        description: 'Passing null as alpha in the JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        }
                      },
                      'abs-percent': {
                        id: 'abs-percent',
                        status: 'active',
                        description: 'Passing percentages to the Sass abs() function.',
                        deprecatedIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        }
                      },
                      'fs-importer-cwd': {
                        id: 'fs-importer-cwd',
                        status: 'active',
                        description: 'Using the current working directory as an implicit load path.',
                        deprecatedIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        }
                      },
                      'css-function-mixin': {
                        id: 'css-function-mixin',
                        status: 'active',
                        description: 'Function and mixin names beginning with --.',
                        deprecatedIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        }
                      },
                      'mixed-decls': {
                        id: 'mixed-decls',
                        status: 'active',
                        description: 'Declarations after or between nested rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        }
                      },
                      'feature-exists': {
                        id: 'feature-exists',
                        status: 'active',
                        description: 'meta.feature-exists',
                        deprecatedIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        }
                      },
                      'color-4-api': {
                        id: 'color-4-api',
                        status: 'active',
                        description: 'Certain uses of built-in sass:color functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'color-functions': {
                        id: 'color-functions',
                        status: 'active',
                        description: 'Using global color functions instead of sass:color.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'legacy-js-api': {
                        id: 'legacy-js-api',
                        status: 'active',
                        description: 'Legacy JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'import': {
                        id: 'import',
                        status: 'active',
                        description: '@import rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'global-builtin': {
                        id: 'global-builtin',
                        status: 'active',
                        description: 'Global built-in functions that are available in sass: modules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'user-authored': {
                        id: 'user-authored',
                        status: 'user',
                        description: null,
                        deprecatedIn: null,
                        obsoleteIn: null
                      }
                    },
                    Version: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    loadParserExports_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.85.1\t(Sass Compiler)\t[Dart]\ndart2js\t3.7.0\t(Dart Compiler)\t[Dart]',
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    types: {
                      Boolean: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {},
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    load: function () { /* omitted long function */ },
                    compile: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileString: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileStringAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initAsyncCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    Compiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    AsyncCompiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    Value: function Value0() {
                    },
                    SassBoolean: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassArgumentList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassCalculation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationOperation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationInterpolation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassColor: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassFunction: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMixin: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMap: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassNumber: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassString: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    sassNull: {},
                    sassTrue: {
                      value: true
                    },
                    sassFalse: {
                      value: false
                    },
                    Exception: function () { /* omitted long function */ },
                    Logger: {
                      silent: {
                        warn: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        },
                        debug: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        }
                      }
                    },
                    NodePackageImporter: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    deprecations: {
                      'call-string': {
                        id: 'call-string',
                        status: 'active',
                        description: 'Passing a string directly to meta.call().',
                        deprecatedIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        },
                        obsoleteIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        }
                      },
                      elseif: {
                        id: 'elseif',
                        status: 'active',
                        description: '@elseif.',
                        deprecatedIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        }
                      },
                      'moz-document': {
                        id: 'moz-document',
                        status: 'active',
                        description: '@-moz-document.',
                        deprecatedIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        }
                      },
                      'relative-canonical': {
                        id: 'relative-canonical',
                        status: 'active',
                        description: 'Imports using relative canonical URLs.',
                        deprecatedIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        }
                      },
                      'new-global': {
                        id: 'new-global',
                        status: 'active',
                        description: 'Declaring new variables with !global.',
                        deprecatedIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        }
                      },
                      'color-module-compat': {
                        id: 'color-module-compat',
                        status: 'active',
                        description: 'Using color module functions in place of plain CSS functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        }
                      },
                      'slash-div': {
                        id: 'slash-div',
                        status: 'active',
                        description: '/ operator for division.',
                        deprecatedIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        }
                      },
                      'bogus-combinators': {
                        id: 'bogus-combinators',
                        status: 'active',
                        description: 'Leading, trailing, and repeated combinators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        }
                      },
                      'strict-unary': {
                        id: 'strict-unary',
                        status: 'active',
                        description: 'Ambiguous + and - operators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        }
                      },
                      'function-units': {
                        id: 'function-units',
                        status: 'active',
                        description: 'Passing invalid units to built-in functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        }
                      },
                      'duplicate-var-flags': {
                        id: 'duplicate-var-flags',
                        status: 'active',
                        description: 'Using !default or !global multiple times for one variable.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        }
                      },
                      'null-alpha': {
                        id: 'null-alpha',
                        status: 'active',
                        description: 'Passing null as alpha in the JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        }
                      },
                      'abs-percent': {
                        id: 'abs-percent',
                        status: 'active',
                        description: 'Passing percentages to the Sass abs() function.',
                        deprecatedIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        }
                      },
                      'fs-importer-cwd': {
                        id: 'fs-importer-cwd',
                        status: 'active',
                        description: 'Using the current working directory as an implicit load path.',
                        deprecatedIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        }
                      },
                      'css-function-mixin': {
                        id: 'css-function-mixin',
                        status: 'active',
                        description: 'Function and mixin names beginning with --.',
                        deprecatedIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        }
                      },
                      'mixed-decls': {
                        id: 'mixed-decls',
                        status: 'active',
                        description: 'Declarations after or between nested rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        }
                      },
                      'feature-exists': {
                        id: 'feature-exists',
                        status: 'active',
                        description: 'meta.feature-exists',
                        deprecatedIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        }
                      },
                      'color-4-api': {
                        id: 'color-4-api',
                        status: 'active',
                        description: 'Certain uses of built-in sass:color functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'color-functions': {
                        id: 'color-functions',
                        status: 'active',
                        description: 'Using global color functions instead of sass:color.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'legacy-js-api': {
                        id: 'legacy-js-api',
                        status: 'active',
                        description: 'Legacy JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'import': {
                        id: 'import',
                        status: 'active',
                        description: '@import rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'global-builtin': {
                        id: 'global-builtin',
                        status: 'active',
                        description: 'Global built-in functions that are available in sass: modules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'user-authored': {
                        id: 'user-authored',
                        status: 'user',
                        description: null,
                        deprecatedIn: null,
                        obsoleteIn: null
                      }
                    },
                    Version: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    loadParserExports_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.85.1\t(Sass Compiler)\t[Dart]\ndart2js\t3.7.0\t(Dart Compiler)\t[Dart]',
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    types: {
                      Boolean: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {},
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    load: function () { /* omitted long function */ },
                    compile: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileString: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileStringAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initAsyncCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    Compiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    AsyncCompiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    Value: function Value0() {
                    },
                    SassBoolean: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassArgumentList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassCalculation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationOperation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationInterpolation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassColor: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassFunction: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMixin: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMap: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassNumber: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassString: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    sassNull: {},
                    sassTrue: {
                      value: true
                    },
                    sassFalse: {
                      value: false
                    },
                    Exception: function () { /* omitted long function */ },
                    Logger: {
                      silent: {
                        warn: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        },
                        debug: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        }
                      }
                    },
                    NodePackageImporter: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    deprecations: {
                      'call-string': {
                        id: 'call-string',
                        status: 'active',
                        description: 'Passing a string directly to meta.call().',
                        deprecatedIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        },
                        obsoleteIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        }
                      },
                      elseif: {
                        id: 'elseif',
                        status: 'active',
                        description: '@elseif.',
                        deprecatedIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        }
                      },
                      'moz-document': {
                        id: 'moz-document',
                        status: 'active',
                        description: '@-moz-document.',
                        deprecatedIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        }
                      },
                      'relative-canonical': {
                        id: 'relative-canonical',
                        status: 'active',
                        description: 'Imports using relative canonical URLs.',
                        deprecatedIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        }
                      },
                      'new-global': {
                        id: 'new-global',
                        status: 'active',
                        description: 'Declaring new variables with !global.',
                        deprecatedIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        }
                      },
                      'color-module-compat': {
                        id: 'color-module-compat',
                        status: 'active',
                        description: 'Using color module functions in place of plain CSS functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        }
                      },
                      'slash-div': {
                        id: 'slash-div',
                        status: 'active',
                        description: '/ operator for division.',
                        deprecatedIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        }
                      },
                      'bogus-combinators': {
                        id: 'bogus-combinators',
                        status: 'active',
                        description: 'Leading, trailing, and repeated combinators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        }
                      },
                      'strict-unary': {
                        id: 'strict-unary',
                        status: 'active',
                        description: 'Ambiguous + and - operators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        }
                      },
                      'function-units': {
                        id: 'function-units',
                        status: 'active',
                        description: 'Passing invalid units to built-in functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        }
                      },
                      'duplicate-var-flags': {
                        id: 'duplicate-var-flags',
                        status: 'active',
                        description: 'Using !default or !global multiple times for one variable.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        }
                      },
                      'null-alpha': {
                        id: 'null-alpha',
                        status: 'active',
                        description: 'Passing null as alpha in the JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        }
                      },
                      'abs-percent': {
                        id: 'abs-percent',
                        status: 'active',
                        description: 'Passing percentages to the Sass abs() function.',
                        deprecatedIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        }
                      },
                      'fs-importer-cwd': {
                        id: 'fs-importer-cwd',
                        status: 'active',
                        description: 'Using the current working directory as an implicit load path.',
                        deprecatedIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        }
                      },
                      'css-function-mixin': {
                        id: 'css-function-mixin',
                        status: 'active',
                        description: 'Function and mixin names beginning with --.',
                        deprecatedIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        }
                      },
                      'mixed-decls': {
                        id: 'mixed-decls',
                        status: 'active',
                        description: 'Declarations after or between nested rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        }
                      },
                      'feature-exists': {
                        id: 'feature-exists',
                        status: 'active',
                        description: 'meta.feature-exists',
                        deprecatedIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        }
                      },
                      'color-4-api': {
                        id: 'color-4-api',
                        status: 'active',
                        description: 'Certain uses of built-in sass:color functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'color-functions': {
                        id: 'color-functions',
                        status: 'active',
                        description: 'Using global color functions instead of sass:color.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'legacy-js-api': {
                        id: 'legacy-js-api',
                        status: 'active',
                        description: 'Legacy JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'import': {
                        id: 'import',
                        status: 'active',
                        description: '@import rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'global-builtin': {
                        id: 'global-builtin',
                        status: 'active',
                        description: 'Global built-in functions that are available in sass: modules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'user-authored': {
                        id: 'user-authored',
                        status: 'user',
                        description: null,
                        deprecatedIn: null,
                        obsoleteIn: null
                      }
                    },
                    Version: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    loadParserExports_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.85.1\t(Sass Compiler)\t[Dart]\ndart2js\t3.7.0\t(Dart Compiler)\t[Dart]',
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    types: {
                      Boolean: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {},
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    load: function () { /* omitted long function */ },
                    compile: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileString: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileStringAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initAsyncCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    Compiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    AsyncCompiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    Value: function Value0() {
                    },
                    SassBoolean: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassArgumentList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassCalculation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationOperation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationInterpolation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassColor: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassFunction: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMixin: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMap: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassNumber: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassString: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    sassNull: {},
                    sassTrue: {
                      value: true
                    },
                    sassFalse: {
                      value: false
                    },
                    Exception: function () { /* omitted long function */ },
                    Logger: {
                      silent: {
                        warn: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        },
                        debug: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        }
                      }
                    },
                    NodePackageImporter: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    deprecations: {
                      'call-string': {
                        id: 'call-string',
                        status: 'active',
                        description: 'Passing a string directly to meta.call().',
                        deprecatedIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        },
                        obsoleteIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        }
                      },
                      elseif: {
                        id: 'elseif',
                        status: 'active',
                        description: '@elseif.',
                        deprecatedIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        }
                      },
                      'moz-document': {
                        id: 'moz-document',
                        status: 'active',
                        description: '@-moz-document.',
                        deprecatedIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        }
                      },
                      'relative-canonical': {
                        id: 'relative-canonical',
                        status: 'active',
                        description: 'Imports using relative canonical URLs.',
                        deprecatedIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        }
                      },
                      'new-global': {
                        id: 'new-global',
                        status: 'active',
                        description: 'Declaring new variables with !global.',
                        deprecatedIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        }
                      },
                      'color-module-compat': {
                        id: 'color-module-compat',
                        status: 'active',
                        description: 'Using color module functions in place of plain CSS functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        }
                      },
                      'slash-div': {
                        id: 'slash-div',
                        status: 'active',
                        description: '/ operator for division.',
                        deprecatedIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        }
                      },
                      'bogus-combinators': {
                        id: 'bogus-combinators',
                        status: 'active',
                        description: 'Leading, trailing, and repeated combinators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        }
                      },
                      'strict-unary': {
                        id: 'strict-unary',
                        status: 'active',
                        description: 'Ambiguous + and - operators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        }
                      },
                      'function-units': {
                        id: 'function-units',
                        status: 'active',
                        description: 'Passing invalid units to built-in functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        }
                      },
                      'duplicate-var-flags': {
                        id: 'duplicate-var-flags',
                        status: 'active',
                        description: 'Using !default or !global multiple times for one variable.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        }
                      },
                      'null-alpha': {
                        id: 'null-alpha',
                        status: 'active',
                        description: 'Passing null as alpha in the JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        }
                      },
                      'abs-percent': {
                        id: 'abs-percent',
                        status: 'active',
                        description: 'Passing percentages to the Sass abs() function.',
                        deprecatedIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        }
                      },
                      'fs-importer-cwd': {
                        id: 'fs-importer-cwd',
                        status: 'active',
                        description: 'Using the current working directory as an implicit load path.',
                        deprecatedIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        }
                      },
                      'css-function-mixin': {
                        id: 'css-function-mixin',
                        status: 'active',
                        description: 'Function and mixin names beginning with --.',
                        deprecatedIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        }
                      },
                      'mixed-decls': {
                        id: 'mixed-decls',
                        status: 'active',
                        description: 'Declarations after or between nested rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        }
                      },
                      'feature-exists': {
                        id: 'feature-exists',
                        status: 'active',
                        description: 'meta.feature-exists',
                        deprecatedIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        }
                      },
                      'color-4-api': {
                        id: 'color-4-api',
                        status: 'active',
                        description: 'Certain uses of built-in sass:color functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'color-functions': {
                        id: 'color-functions',
                        status: 'active',
                        description: 'Using global color functions instead of sass:color.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'legacy-js-api': {
                        id: 'legacy-js-api',
                        status: 'active',
                        description: 'Legacy JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'import': {
                        id: 'import',
                        status: 'active',
                        description: '@import rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'global-builtin': {
                        id: 'global-builtin',
                        status: 'active',
                        description: 'Global built-in functions that are available in sass: modules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'user-authored': {
                        id: 'user-authored',
                        status: 'user',
                        description: null,
                        deprecatedIn: null,
                        obsoleteIn: null
                      }
                    },
                    Version: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    loadParserExports_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.85.1\t(Sass Compiler)\t[Dart]\ndart2js\t3.7.0\t(Dart Compiler)\t[Dart]',
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    types: {
                      Boolean: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {},
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    load: function () { /* omitted long function */ },
                    compile: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileString: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    compileStringAsync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    initAsyncCompiler: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    Compiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    AsyncCompiler: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    Value: function Value0() {
                    },
                    SassBoolean: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassArgumentList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassCalculation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationOperation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    CalculationInterpolation: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassColor: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassFunction: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMixin: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassList: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassMap: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassNumber: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    SassString: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    sassNull: {},
                    sassTrue: {
                      value: true
                    },
                    sassFalse: {
                      value: false
                    },
                    Exception: function () { /* omitted long function */ },
                    Logger: {
                      silent: {
                        warn: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        },
                        debug: function () {
                          return _call(f, Array.prototype.slice.apply(arguments));
                        }
                      }
                    },
                    NodePackageImporter: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    deprecations: {
                      'call-string': {
                        id: 'call-string',
                        status: 'active',
                        description: 'Passing a string directly to meta.call().',
                        deprecatedIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        },
                        obsoleteIn: {
                          major: 0,
                          minor: 0,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '0.0.0'
                        }
                      },
                      elseif: {
                        id: 'elseif',
                        status: 'active',
                        description: '@elseif.',
                        deprecatedIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 3,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.3.2'
                        }
                      },
                      'moz-document': {
                        id: 'moz-document',
                        status: 'active',
                        description: '@-moz-document.',
                        deprecatedIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 7,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.7.2'
                        }
                      },
                      'relative-canonical': {
                        id: 'relative-canonical',
                        status: 'active',
                        description: 'Imports using relative canonical URLs.',
                        deprecatedIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 14,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.14.2'
                        }
                      },
                      'new-global': {
                        id: 'new-global',
                        status: 'active',
                        description: 'Declaring new variables with !global.',
                        deprecatedIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 17,
                          patch: 2,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.17.2'
                        }
                      },
                      'color-module-compat': {
                        id: 'color-module-compat',
                        status: 'active',
                        description: 'Using color module functions in place of plain CSS functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 23,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.23.0'
                        }
                      },
                      'slash-div': {
                        id: 'slash-div',
                        status: 'active',
                        description: '/ operator for division.',
                        deprecatedIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 33,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.33.0'
                        }
                      },
                      'bogus-combinators': {
                        id: 'bogus-combinators',
                        status: 'active',
                        description: 'Leading, trailing, and repeated combinators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 54,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.54.0'
                        }
                      },
                      'strict-unary': {
                        id: 'strict-unary',
                        status: 'active',
                        description: 'Ambiguous + and - operators.',
                        deprecatedIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 55,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.55.0'
                        }
                      },
                      'function-units': {
                        id: 'function-units',
                        status: 'active',
                        description: 'Passing invalid units to built-in functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 56,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.56.0'
                        }
                      },
                      'duplicate-var-flags': {
                        id: 'duplicate-var-flags',
                        status: 'active',
                        description: 'Using !default or !global multiple times for one variable.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.0'
                        }
                      },
                      'null-alpha': {
                        id: 'null-alpha',
                        status: 'active',
                        description: 'Passing null as alpha in the JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 62,
                          patch: 3,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.62.3'
                        }
                      },
                      'abs-percent': {
                        id: 'abs-percent',
                        status: 'active',
                        description: 'Passing percentages to the Sass abs() function.',
                        deprecatedIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 65,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.65.0'
                        }
                      },
                      'fs-importer-cwd': {
                        id: 'fs-importer-cwd',
                        status: 'active',
                        description: 'Using the current working directory as an implicit load path.',
                        deprecatedIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 73,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.73.0'
                        }
                      },
                      'css-function-mixin': {
                        id: 'css-function-mixin',
                        status: 'active',
                        description: 'Function and mixin names beginning with --.',
                        deprecatedIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 76,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.76.0'
                        }
                      },
                      'mixed-decls': {
                        id: 'mixed-decls',
                        status: 'active',
                        description: 'Declarations after or between nested rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 77,
                          patch: 7,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.77.7'
                        }
                      },
                      'feature-exists': {
                        id: 'feature-exists',
                        status: 'active',
                        description: 'meta.feature-exists',
                        deprecatedIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 78,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.78.0'
                        }
                      },
                      'color-4-api': {
                        id: 'color-4-api',
                        status: 'active',
                        description: 'Certain uses of built-in sass:color functions.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'color-functions': {
                        id: 'color-functions',
                        status: 'active',
                        description: 'Using global color functions instead of sass:color.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'legacy-js-api': {
                        id: 'legacy-js-api',
                        status: 'active',
                        description: 'Legacy JS API.',
                        deprecatedIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 79,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.79.0'
                        }
                      },
                      'import': {
                        id: 'import',
                        status: 'active',
                        description: '@import rules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'global-builtin': {
                        id: 'global-builtin',
                        status: 'active',
                        description: 'Global built-in functions that are available in sass: modules.',
                        deprecatedIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        },
                        obsoleteIn: {
                          major: 1,
                          minor: 80,
                          patch: 0,
                          preRelease: [],
                          build: [],
                          _version$_text: '1.80.0'
                        }
                      },
                      'user-authored': {
                        id: 'user-authored',
                        status: 'user',
                        description: null,
                        deprecatedIn: null,
                        obsoleteIn: null
                      }
                    },
                    Version: function () {
                      return _call(f, this, Array.prototype.slice.apply(arguments));
                    },
                    loadParserExports_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.85.1\t(Sass Compiler)\t[Dart]\ndart2js\t3.7.0\t(Dart Compiler)\t[Dart]',
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    types: {
                      Boolean: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {},
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '730daa6c'
            }
          },
          {
            loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\thread-loader\\dist\\cjs.js'
          },
          {
            loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\babel-loader\\lib\\index.js'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\@vue\\cli-service\\lib'
        ],
        use: [
          {
            loader: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\eslint-loader\\index.js',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: 'f7824ce4',
              emitWarning: false,
              emitError: false,
              eslintPath: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\node_modules\\eslint',
              formatter: undefined
            }
          }
        ]
      },
      {
        test: /\.coffee$/,
        use: [
          'coffee-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/i
            },
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('feature-flags') */
    new DefinePlugin(
      {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"production"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ),
    /* config.plugin('optimize-css') */
    new OptimizeCssnanoPlugin(
      {
        sourceMap: false,
        cssnanoOptions: {
          preset: [
            'default',
            {
              mergeLonghand: false,
              cssDeclarationSorter: false
            }
          ]
        }
      }
    ),
    /* config.plugin('hash-module-ids') */
    new HashedModuleIdsPlugin(
      {
        hashDigest: 'hex'
      }
    ),
    /* config.plugin('named-chunks') */
    new NamedChunksPlugin(
      function () { /* omitted long function */ }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'build-a-bot',
        templateParameters: function () { /* omitted long function */ },
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true
        },
        template: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\public\\index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\public',
          to: 'C:\\Users\\user\\Desktop\\vue3\\Vue.js Fund\\build-a-bot\\dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    )
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  }
}
