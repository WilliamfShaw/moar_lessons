class MoviesController < ApplicationController
   
  before_action :authenticate

  def home
    render layout: 'application', text: ''
  end

  def search
    movies = OmdbApi.search(params[:query])
    render json: movies
  end

  def show
    movie = OmdbApi.movie(params[:id])
    render json: movie
  end
  
end
