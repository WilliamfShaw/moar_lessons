class Lamp
  def initialize(wattage)
    @status  = false
    @wattage = wattage
  end

  def status
    @status
  end

  def wattage
    @wattage
  end

  def switch
    @status = !@status
  end
end
