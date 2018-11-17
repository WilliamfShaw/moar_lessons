class EntriesController < ApplicationController

  # GET /entries
  # GET /entries.json
  def index
    @entries = Entry.all
    respond_to do |format|
      format.html {}
      format.json { render json: @entries }
    end
  end

  # GET /entries/1
  # GET /entries/1.json
  def show
    @entry = Entry.find(params[:id])
    respond_to do |format|
      format.html {}
      format.json { render json: @entry }
    end
  end

  # GET /entries/new
  def new
    @entry = Entry.new
  end

  # GET /entries/1/edit
  def edit
    @entry = Entry.find(params[:id])
  end

  # POST /entries
  # POST /entries.json
  def create
    @entry = Entry.new({
      content: params[:entry][:content],
      journal_id: params[:entry][:journal_id]
    })

    respond_to do |format|
      if @entry.save
        format.html { redirect_to "/entries/#{@entry.id}" }
        format.json { render :show }
      else
        format.html { render :new }
        format.json { render json: @entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /entries/1
  # PATCH/PUT /entries/1.json
  def update
    @entry = Entry.find(params[:id])
    respond_to do |format|
      if @entry.update({
        content: params[:entry][:content],
        journal_id: params[:entry][:journal_id]
      })
        format.html { redirect_to @entry }
        format.json { render :show }
      else
        format.html { render :edit }
        format.json { render json: @entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /entries/1
  # DELETE /entries/1.json
  def destroy
    @entry = Entry.find(params[:id])
    @entry.destroy
    respond_to do |format|
      format.html { redirect_to '/entries' }
      format.json { render json: @entry }
    end
  end

  private
  def entry_params
    params.require(:entry).permit(:content, :journal_id)
  end
end
