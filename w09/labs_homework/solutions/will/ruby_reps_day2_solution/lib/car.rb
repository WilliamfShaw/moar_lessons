class Car 

  def initialize(make, model, year, hp)
    @make = make
    @model = model
    @year = year
    @hp = hp 
    @tricked_out = false
  end

  def make
    @make
  end

  def make=(new_make)
    @make = new_make 
  end

  def model
    @model
  end

  def model=(new_model)
    @model = new_model
  end
  
  def year
    @year
  end

  def year=(new_year)
    @year = new_year
  end

  def hp
    @hp
  end

  def hp=(new_hp)
    @hp = new_hp
  end

  def info
    "#{@year} #{@make} #{@model}"
  end

  def upgrade
    @tricked_out = true
  end

end
