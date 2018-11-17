Rails.application.routes.draw do
  
  # Verb + Path points at Controller+Action
  
  # songs
  # get '/songs' => 'songs#index'
  # get '/songs/new' => 'songs#new'
  # post '/songs' => 'songs#create'
  # get '/songs/:id' => 'songs#show'
  # get '/songs/:id/edit' => 'songs#edit'
  # put '/songs/:id' => 'songs#update'
  # delete '/songs/:id' => 'songs#destroy'

  resources :songs

  # artists
  # get '/artists' => 'artists#index'
  # get '/artists/new' => 'artists#new'
  # post '/artists' => 'artists#create'
  # get '/artists/:id' => 'artists#show'
  # get '/artists/:id/edit' => 'artists#edit'
  # put '/artists/:id' => 'artists#update'
  # delete '/artists/:id' => 'artists#destroy'

  resources :artists

  # playlists
  # get '/playlists' => 'playlists#index'
  # get '/playlists/new' => 'playlists#new'
  # post '/playlists' => 'playlists#create'
  # get '/playlists/:id' => 'playlists#show'
  # get '/playlists/:id/edit' => 'playlists#edit'
  # put '/playlists/:id' => 'playlists#update'
  # delete '/playlists/:id' => 'playlists#destroy'

  resources :playlists do
    member do
      put 'add_song', as: :add_song_to
      put 'remove_song', as: :remove_song_from
    end
  end
  # put '/playlists/:id/add_song' => 'playlists#add_song'
  # put '/playlists/:id/remove_song' => 'playlists#remove_song'

end
