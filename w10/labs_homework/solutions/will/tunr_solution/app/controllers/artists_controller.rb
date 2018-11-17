class ArtistsController < ApplicationController

	def index
		@artists = Artist.all
		render :index
	end

	def show
		@artist = Artist.find(params[:id])
		render :show
	end

	def new
		@artist = Artist.new
		render :new
	end

	def create
		@artist = Artist.new(params.permit![:artist])
		if @artist.save
			redirect_to(artist_path(@artist))
		else
			redirect_to(new_artist_path)
		end
	end

	def edit
		@artist = Artist.find(params[:id])
		render :edit
	end

	def update
		@artist = Artist.find(params[:id])
		if @artist.update(params.permit![:artist])
			redirect_to(artist_path(@artist))
		else
			redirect_to(edit_artist_path(@artist))
		end
	end

	def destroy
		@artist = Artist.find(params[:id])
		if @artist.destroy
			redirect_to(artists_path)
		else
			redirect_to(edit_artist_path(@artist))
		end
	end
end