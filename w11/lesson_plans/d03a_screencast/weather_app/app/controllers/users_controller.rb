class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      respond_to do |format|
        format.html { redirect_to root_path }
        format.json { render json: @user }
      end
    else
      respond_to do |format|
        format.html { render :new }
        format.json { render json: { msg: 'Nope.' }, status: 422 }
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :bio)
  end

end
