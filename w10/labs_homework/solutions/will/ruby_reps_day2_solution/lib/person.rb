class Person

  def initialize(name, age, eye_color)
    @name = name
    @age = age
    @eye_color = eye_color
    @rested = true
  end

  def name
    @name
  end

  def name=(new_name)
    @name = new_name
  end

  def age
    @age
  end

  def age=(new_age)
    @age = new_age
  end

  def eye_color
    @eye_color
  end

  def eye_color=(new_eye_color)
    @eye_color = new_eye_color
  end

  def introduce
    "Hi, my name is #{@name}, I am currently #{@age} years old, my eye color is #{@eye_color}"
  end

  def sleep
    @rested = true
  end

  def code
    @rested = false
  end

end
