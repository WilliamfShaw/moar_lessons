Rails.application.routes.draw do
  resources :users, only: [:index, :new, :create]

  get    "sessions/new" => "sessions#new"
  post   "sessions"     => "sessions#create"
  delete "sessions"     => "sessions#destroy"

  get    "premium"      => "users#premium"
end
