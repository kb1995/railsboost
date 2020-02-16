require 'sidekiq/web'

Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development? || Rails.env.test?

  namespace :admin do
    resources :users
    resources :announcements
    resources :notifications
    resources :services

    root to: "users#index"
  end
  get '/privacy', to: 'home#privacy'
  get '/terms', to: 'home#terms'
    authenticate :user, lambda { |u| u.admin? } do
      mount Sidekiq::Web => '/sidekiq'
    end


  resources :notifications, only: [:index]
  resources :announcements, only: [:index]

  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks", registrations: "registrations" }
  resources :users, only: [:edit, :update]

  #
  root to: 'home#index'
end
