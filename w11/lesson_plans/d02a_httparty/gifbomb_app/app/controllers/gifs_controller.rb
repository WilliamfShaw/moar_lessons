class GifsController < ApplicationController

  def search
    term = params[:term]
    render json: GiphyWrapper.search(term)
  end

  def random
    render json: GiphyWrapper.get_random_gif
  end

end