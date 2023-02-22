const html_webpack_plugin = require('html-webpack-plugin')
const path = require('path')
const dist_dit = path.resolve(__dirname, '../../../../../../public')

//
// get_entry
//

const get_entry = (dev) => {
  return dev
    ? {
        dev: __dirname + '/src/dev/dev.js',
        widget_init: __dirname + '/src/widget_init.js',
        assets: __dirname + '/src/assets.js',
      }
    : {
        widget: __dirname + '/src/widget.js',
        widget_init: __dirname + '/src/widget_init.js',
      }
}

//
// get_rules
//

const get_rules = (dev) => {
  rules = [
    // widget.js
    {
      test: /\^widget.js$/i,
      type: 'asset/resource',
      generator: {
        filename: './[name][ext]',
      },
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
    },

    // js
    {
      test: /\.(mjs|js)$/i,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
    },

    // css
    {
      test: /\.sass$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('postcss-preset-env')],
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: dev ? true : false,
          },
        },
      ],
    },
  ]

  if (dev) {
    rules.push(
      // json
      {
        test: /\.json$/i,
        type: 'asset/resource',
      }
    )
  }

  return rules
}

//
// get_plugins
//

const get_plugins = (dev) => {
  return dev
    ? [
        new html_webpack_plugin({
          template: __dirname + '/src/index.html',
        }),
      ]
    : []
}

//
// exports
//

module.exports = ({ dev, serve }) => {
  return {
    // mode
    mode: dev ? 'development' : 'production',

    // target
    target: ['browserslist'],

    // devtool
    devtool: dev ? 'eval-source-map' : undefined,

    // devServer
    devServer: serve
      ? {
          open: {
            app: {
              name: 'firefox',
              arguments: ['--new-tab'],
            },
          },
          hot: false,
          port: 8080,
        }
      : undefined,

    // entry
    entry: get_entry(dev),

    // output
    output: {
      filename: '[name].js',
      clean: false,
      path: dist_dit,
      assetModuleFilename: '[name][ext]',
    },

    resolve: {
      alias: {
        // loaders
        '@loaders': __dirname + '/src/loaders/_loaders',

        // assets
        '@assets': __dirname + '/src/form_builder/assets/_assets',
        '@m_assets': __dirname + '/src/form_builder/model/assets/_assets',
        '@v_assets': __dirname + '/src/form_builder/view/assets/_assets',
        '@c_assets': __dirname + '/src/form_builder/controller/assets/_assets',

        // icons
        '@icons': __dirname + '/src/form_builder/icons/_icons',

        // styles
        '@styles': __dirname + '/src/form_builder/styles',

        // helpers
        '@helpers': __dirname + '/src/form_builder/helpers/_helpers',
        '@m_helpers': __dirname + '/src/form_builder/model/helpers/_helpers',
        '@v_helpers': __dirname + '/src/form_builder/view/helpers/_helpers',
        '@c_helpers':
          __dirname + '/src/form_builder/controller/helpers/_helpers',
      },
    },

    // module
    module: {
      rules: get_rules(dev),
    },

    //plugins
    plugins: get_plugins(dev),
  }
}
