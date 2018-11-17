class UsersController < ApplicationController

  before_action :authenticate, only: [:premium]

  def index
    @users = User.all
    respond_to do |format|
      format.html {}
      format.json { render json: @users }
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user.attributes
    else
      render json: @user.errors, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
