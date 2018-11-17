Rails.application.routes.draw do
  root to: 'application#index'

  resources :users, only: [:index, :new, :create]
  resources :cities, only: [:index, :show, :new, :create]

  get 'sessions/new' => 'sessions#new'
  post 'sessions' => 'sessions#create'
  delete 'sessions' => 'sessions#destroy'
end
