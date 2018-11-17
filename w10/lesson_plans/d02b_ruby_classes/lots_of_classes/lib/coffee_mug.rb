class CoffeeMug

  def initialize(color)
    @color = color
    @level = 0
  end

  def color
    @color
  end

  def color=(new_color)
    @color = new_color
  end

  def level
    @level
  end

  def drink
    @level -= 1 if @level > 0
  end

  def refill
    @level = 10
  end

end
