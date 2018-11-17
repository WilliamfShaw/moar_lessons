class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:current_user] = user.id
      respond_to do |format|
        format.html { redirect_to root_path }
        format.json { render json: user }
      end
    else
      respond_to do |format|
        format.html { render :new }
        format.json { render json: { msg: 'Bad login info' }}
      end
    end
  end

  def destroy
    session[:current_user] = nil
    respond_to do |format|
      format.html { redirect_to sessions_new_path }
      format.json { render json: { msg: 'Logged out' }}
    end
  end

end
