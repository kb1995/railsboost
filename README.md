# Railsboost

An opinionated template to boost your bootstrapping productivity. Railsboost is an expanded version of [Jumpstart](https://github.com/excid3/jumpstart), incorporating even more great defaults!

## Gems

Gems included from the start with Railsboost:

- Background processing via [sidekiq](https://github.com/mperham/sidekiq)
- Cron jobs via [whenever][https://github.com/javan/whenever]
- SEO meta-tags and sitemap generator via [meta-tags](https://github.com/kpumuk/meta-tags) & [sitemap_generator](https://github.com/kjvarga/sitemap_generator)
- Collect user information with [simple_form](https://github.com/plataformatec/simple_form)
- Pretty JSON output for your API with [active_model_serializers](https://github.com/rails-api/active_model_serializers)
- [Turbolinks](https://github.com/turbolinks/turbolinks) support
- Authentication via [devise](https://github.com/plataformatec/devise)
- Easily configurable admin dashboards uisng [administrate](https://github.com/thoughtbot/administrate)
- Convenient wrapper for your ENV with [nenv](https://github.com/e2/nenv)
- Maintain good standards with [rubocop](https://github.com/rubocop-hq/rubocop) & [strong_migrations](https://github.com/ankane/strong_migrations#adding-a-column-with-a-default-value) & [rails-patterns](https://github.com/Selleo/pattern)
- Inspect your emails via [letter_opener_web](https://github.com/fgrehm/letter_opener_web) 
- Better debugging with [better_errors](https://github.com/BetterErrors/better_errors)

## TailwindCSS

Use utility-first CSS to style your application using [TailwindCSS](https://tailwindcss.com/). It comes with several great defaults:

- Form styling with [custom-forms](https://github.com/tailwindcss/custom-forms)
- Background shapes with [tailwind-heropatterns](https://github.com/AndreaMinato/tailwind-heropatterns)
- Sample primary/secondary/success/warning/danger colours, which you can easily customise
- Alert, buttons, tabs, default typography, cards and more components

## StimulusJS

Add Javascript to your HTML in a structured way using [StimulusJS](https://stimulusjs.org/). Railsboost comes with several useful controllers which work out of the box:

- modal controller
- tabs controller
- dropdown controller
- nested form controller
- toggle controller
- clipboard controller

## Other goodies

- All [Feather icons](https://feathericons.com) are included in the project by default - use them easily with the **render_icon** helper
- [Action Text](https://edgeguides.rubyonrails.org/action_text_overview.html) & Trix included by default
- Direct Uploads using Active Storage and S3 (include your S3 environment variables in your **.env** file) [WIP, you are welcome to create a Pull Request]

## Installation

1. Clone the repo
2. **gem install bundle** && **bundle install**
3. **npm install** && **yarn install**
4. **gem install foreman**
5. replace "railsboost_" in **config/database.yml** && "Railsboost" in **config/application.rb** with your new app name 
6. **rails db:setup** & **rake db:migrate**
7. run your server using **foreman s**

### Reset your .git

1. rm -rf .git
2. git init
3. git add .
4. git commit -m 'First commit'
5. push to your remote repo

## Version 2

Development on this project is ongoing. Some things that I have planned for version 2:

- Tailwind pills components
- Tailwind btn-outline components
- Tailwind table components
- Active navbar page helper
- Improved styling for simple form
- Data-confirm-modal with Tailwind/Stimulus
- Improvements around active storage/direct upload
- Image_processing gem configuration
- Staging app configuration
- Template landing page && more styling around default screens