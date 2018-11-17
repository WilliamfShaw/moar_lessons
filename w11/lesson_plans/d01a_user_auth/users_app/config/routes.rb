Rails.application.routes.draw do
  resources :users, only: [:index, :new, :create]
  resources :entries, except: [:edit, :update, :destroy]


  get    '/sessions/new' => 'sessions#new',    as: 'login'
  post   '/sessions'     => 'sessions#create'
  delete '/sessions'     => 'sessions#destroy'
end
