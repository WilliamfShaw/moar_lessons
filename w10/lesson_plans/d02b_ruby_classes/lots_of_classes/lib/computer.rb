class Computer

  def initialize(company, model, color)
    @company = company
    @model = model
    @color = color
  end

  def company
    @company
  end

  def model
    @model
  end

  def color
    @color
  end

  def company=(newCompany)
    @company = newCompany
  end

  def model=(newModel)
    @model = newModel
  end

  def color=(newColor)
    @color = newColor
  end

  def info
    [
      "Company : #{company}",
      "Model   : #{model}",
      "Color   : #{color}"
    ].join("\n")
  end

end
