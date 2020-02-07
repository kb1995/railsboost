let environment = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('tailwindcss')('app/javascript/src/stylesheets/tailwind.config.js'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  environment.plugins.push(
    require('@fullhuman/postcss-purgecss')({
    content: [
      './app/**/*.html.erb',
      './app/helpers/**/*.rb',
      './app/frontend/**/*.js',
      './app/frontend/**/*.rb',
      './config/initializers/*.rb'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }))
}

module.exports = environment

