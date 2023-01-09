# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.6.5"

# base gems
gem "rails", "~> 6.0.2", ">= 6.0.2.1"
gem "pg", ">= 0.18", "< 2.0"
gem "puma", "~> 4.1"
gem "webpacker", "~> 4.0"

# uploads
gem "mini_magick", "~> 4.9", ">= 4.9.2"
gem 'aws-sdk', '~> 3.0', '>= 3.0.1'

# queues
gem "sidekiq", "~> 6.0", ">= 6.0.3"
gem 'whenever', '~> 1.0', require: false

# SEO
gem "sitemap_generator", "~> 6.0", ">= 6.0.1"
gem "meta-tags", "~> 2.13"

# forms
gem "simple_form", "~> 5.0", ">= 5.0.1"

# css/js
gem "sass-rails", ">= 6"
gem "turbolinks", "~> 5"

# API
gem "jbuilder", "~> 2.7"
gem "active_model_serializers", "~> 0.10.0"

# auth
gem "devise", "~> 4.7", ">= 4.7.0"
gem "devise_masquerade", "~> 1.2"
gem "omniauth-facebook", "~> 5.0"
gem "omniauth-github", "~> 1.3"
gem "omniauth-twitter", "~> 1.4"
gem 'administrate', '~> 0.12.0'

# usefuls
gem "inline_svg", "~> 1.7"
gem "nenv", "~> 0.3.0"
gem "strong_migrations", "~> 0.5.1"
gem "rails-patterns", "~> 0.6.0"
gem "draper", "~> 3.1"
gem "attr_extras", "~> 6.2"
gem "gravatar_image_tag", "~> 1.2"
gem "name_of_person", "~> 1.1"
gem "possessive", "~> 1.0"
gem 'hashid-rails', '~> 1.4'

# good standards
gem 'rubocop', '~> 0.78.0', require: false
gem "rubocop-rails_config", "~> 0.2", require: false

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", ">= 1.4.2", require: false

group :development, :test do
  gem "letter_opener_web", "~> 1.3", ">= 1.3.4"
  # Call "byebug" anywhere in the code to stop execution and get a debugger console
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'annotate', '~> 3.0', '>= 3.0.3'
  gem "better_errors", "~> 2.5", ">= 2.5.1"
  gem "binding_of_caller"
  # Access an interactive console on exception pages or by calling "console" anywhere in the code.
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem "capybara", ">= 2.15"
  gem "selenium-webdriver"
  # Easy installation and use of web drivers to run system tests with browsers
  gem "webdrivers"
end
