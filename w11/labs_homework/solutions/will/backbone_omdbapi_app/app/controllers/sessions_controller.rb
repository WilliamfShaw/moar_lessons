class SessionsController < ApplicationController

  def create
    username = params[:username]
    password = params[:password]

    user = User.find_by(username: username)
    if user && user.authenticate(password)
      session[:current_user] = user.id
      render json: user
    else
			render json: { error: "Invalid Login" }, status: 400
    end
  end

  def destroy
    session[:current_user] = nil
    render json: { nothing: true }
  end

end