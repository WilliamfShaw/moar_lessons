class TeamsController < ApplicationController

  def index
    @teams = Team.all

    respond_to do |format|
      format.html {}
      format.json { render json: @teams }
    end
  end

  def show
    @team = Team.find(params[:id])

    respond_to do |format|
      format.html {}
      format.json { render json: @team }
    end
  end

  def new
    @team = Team.new
  end

  def create
    @team = Team.new(team_params)
    @team.save

    respond_to do |format|
      format.html { redirect_to '/teams'}
      format.json { render json: @team }
    end
  end

  def edit
    @team = Team.find(params[:id])
  end

  def update
    @team = Team.find(params[:id])

    @team.update(team_params)

    respond_to do |format|
      format.html { redirect_to "/teams/#{@team.id}"}
      format.json { render json: @team }
    end
  end

  def destroy
    @team = Team.find(params[:id])

    @team.destroy

    respond_to do |format|
      format.html { redirect_to '/teams' }
      format.json { render json: @team }
    end
  end

  private

  def team_params
    params.require(:team).permit(:name, :photo_url, :hometown, :number_of_championships)
  end 

end
