Rails.application.routes.draw do
  root to: 'movies#home'
  get 'movies/search', to: 'movies#search'
  get 'movies/:id', to: 'movies#show'
  
  resources :users, :only => [:create]
  resources :sessions, :only => [:create]
  delete 'sessions', to: 'sessions#destroy'
end
