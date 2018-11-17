class JournalsController < ApplicationController

  # GET /journals
  # GET /journals.json
  def index
    @journals = Journal.all
    respond_to do |format|
      format.html {}
      format.json { render json: @journals }
    end
  end

  # GET /journals/1
  # GET /journals/1.json
  def show
    @journal = Journal.find(params[:id])
    respond_to do |format|
      format.html {}
      format.json { render json: @journal }
    end
  end

  # GET /journals/new
  def new
    @journal = Journal.new
  end

  # GET /journals/1/edit
  def edit
    @journal = Journal.find(params[:id])
  end

  # POST /journals
  # POST /journals.json
  def create
    @journal = Journal.new({ name: params[:journal][:name] })

    respond_to do |format|
      if @journal.save
        format.html { redirect_to "/journals/#{@journal.id}" }
        format.json { render :show }
      else
        format.html { render :new }
        format.json { render json: @journal.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /journals/1
  # PATCH/PUT /journals/1.json
  def update
    @journal = Journal.find(params[:id])
    respond_to do |format|
      if @journal.update({ name: params[:journal][:name] })
        format.html { redirect_to @journal }
        format.json { render :show }
      else
        format.html { render :edit }
        format.json { render json: @journal.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /journals/1
  # DELETE /journals/1.json
  def destroy
    @journal = Journal.find(params[:id])
    @journal.destroy
    respond_to do |format|
      format.html { redirect_to '/journals' }
      format.json { render json: @journal }
    end
  end

  private
  def journal_params
    params.require(:journal).permit(:name)
  end
end
