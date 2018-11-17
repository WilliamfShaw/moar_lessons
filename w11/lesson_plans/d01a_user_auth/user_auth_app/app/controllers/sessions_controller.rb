class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:current_user] = user.id
      respond_to do |format|
        format.html { redirect_to users_path }
        format.json { render json: user }
      end
    else
      respond_to do |format|
        format.html { render :new }
        format.json { render json: { error: 'BAD' }, status: 422 }
      end
    end
  end

  def destroy
    session[:current_user] = nil
    redirect_to '/sessions/new'
  end

end
