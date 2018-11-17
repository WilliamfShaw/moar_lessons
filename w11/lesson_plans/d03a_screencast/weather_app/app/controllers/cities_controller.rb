class CitiesController < ApplicationController

  before_action :authenticate, except: [:index]

  def index
    @cities = City.all
  end

  def show
    @city = City.find(params[:id])
    weather_data = Weather.for_city(@city.name)
    @temp = weather_data[:temp]
    @weather = weather_data[:weather]
  end

  def new
    @city = City.new
  end

  def create
    @city = City.new(city_params)
    if @city.save
      respond_to do |format|
        format.html { redirect_to @city }
        format.json { render json: @city }
      end
    else
      respond_to do |format|
        format.html { render :new }
        format.json { render json: @city.errors }
      end
    end
  end

  private
  def city_params
    params.require(:city).permit(:name)
  end
end
