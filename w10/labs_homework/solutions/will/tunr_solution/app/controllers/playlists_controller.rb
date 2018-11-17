class PlaylistsController < ApplicationController

	def index
		@playlists = Playlist.all
		render :index
	end

	def show
		@playlist = Playlist.find(params[:id])
		render :show
	end

	def new
		render :new
	end

	def create
		@playlist = Playlist.new(params.permit![:playlist])
		if @playlist.save
			redirect_to(playlist_path(@playlist))
		else
			redirect_to(new_playlist_path)
		end
	end

	def edit
		@playlist = Playlist.find(params[:id])
		@songs = Song.all
		render :edit
	end

	def update
		@playlist = Playlist.find(params[:id])
		if @playlist.update(params.permit![:playlist])
			redirect_to(playlist_path(@playlist))
		else
			redirect_to(edit_playlist_path(@playlist))
		end
	end

	def destroy
		@playlist = Playlist.find(params[:id])
		if @playlist.destroy
			redirect_to(playlists_path)
		else
			redirect_to(playlist_path(@playlist))
		end
	end

	def add_song
		playlist = Playlist.find(params[:id])
		song = Song.find(params[:song_id])
		playlist.add_song(song)
		redirect_to(playlist_path(playlist))
	end
	
	def remove_song
		playlist = Playlist.find(params[:id])
		song = Song.find(params[:song_id])
		playlist.remove_song(song)
		redirect_to(playlist_path(playlist))
	end
end