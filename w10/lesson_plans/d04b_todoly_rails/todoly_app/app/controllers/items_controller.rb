class ItemsController < ApplicationController

  def index
    @completed_items = Item.where({ completed: true })
    @incomplete_items = Item.where({ completed: false })
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
    if @item.save
      respond_to do |format|
        format.html { redirect_to @item }
        format.json { render json: @item}
      end
    else
      redirect_to '/new'
    end
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      respond_to do |format|
        format.html { redirect_to @item }
        format.json { render json: @item}
      end
    else
      redirect_to '/edit/' + params[:id]
    end
  end

  def destroy
    @item = Item.find(params[:id])
    if @item.destroy
      respond_to do |format|
        format.html { redirect_to '/items'}
        format.json { render json: @item }
      end
    end
  end

  private

  def item_params
    params.require(:item).permit(:description, :completed)
  end

end