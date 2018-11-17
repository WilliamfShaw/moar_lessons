class EntriesController < ApplicationController

  before_action :authenticate

  def index
    @entries = Entry.all
  end

  def show
    @entry = Entry.find(params[:id])
    redirect_to entries_path unless current_user == @entry.user
  end

  def new
    @entry = Entry.new
  end

  def create
    current_user = User.find(session[:current_user_id])
    @entry = Entry.new(entry_params)
    @entry.user = current_user
    if @entry.save
      redirect_to @entry
    else
      render :new
    end
  end

  private
  def entry_params
    params.require(:entry).permit(:title, :content)
  end
end
