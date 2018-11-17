class ItemsController < ApplicationController

  def index
    @items = Item.all

    respond_to do |format|
      format.html {}
      format.json { render json: @items }
    end
  end

  def show
    @item = Item.find(params[:id])

    respond_to do |format|
      format.html {}
      format.json { render json: @item }
    end
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    @item.completed = false

    @item.save

    respond_to do |format|
      format.html { redirect_to items_path}
      format.json { render json: @item }
    end
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])

    @item.update(item_params)

    respond_to do |format|
      format.html { redirect_to item_path(@item.id)}
      format.json { render json: @item }
    end
  end

  def destroy
    @item = Item.find(params[:id])

    @item.destroy

    respond_to do |format|
      format.html { redirect_to items_path }
      format.json { render json: @item }
    end
  end

  private

  def item_params
    params.require(:item).permit(:description,:completed)
  end

end
