class Garage

  def initialize(name)
    @name = name
    @cars = []
  end

  def owner
    @owner
  end

  def owner=(person)
    @owner = person
  end

  def add_car(car)
    @cars.push(car)
  end  

  def roster
    car_infos = @cars.map do |car|
     car.info
    end
    car_infos.join("\n")
  end

  def recommend
    random_car = @cars.sample
    "Hello #{@owner.name}, I think you should drive your #{random_car.info} today!!"
  end

end