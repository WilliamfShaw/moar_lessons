class SongsController < ApplicationController

	def index
		@songs = Song.all
		render :index
	end

	def show
		@song = Song.find(params[:id])
		render :show
	end

	def new
		@artists = Artist.all
		render :new
	end

	def create
		@song = Song.new(params.permit![:song])
		if @song.save
			redirect_to(song_path(@song))
		else
			redirect_to(new_song_path)
		end
	end

	def edit
		@song = Song.find(params[:id])
		@artists = Artist.all
		render :edit
	end

	def update
		@song = Song.find(params[:id])
		if @song.update(params.permit![:song])
			redirect_to(song_path(@song))
		else
			redirect_to(edit_song_path(@song))
		end
	end

	def destroy
		@song = Song.find(params[:id])
		@song.destroy
		redirect_to(songs_path)
	end
end