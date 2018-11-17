class VideoGame

  def initialize(name, publisher, price, awesomeness)
    @name = name
    @publisher = publisher
    @price = price
    @awesomeness = awesomeness
  end

  def name
    @name
  end

  def name=(new_name)
    @name = new_name
  end

  def publisher
    @publisher
  end

  def publisher=(new_publisher)
    @publisher = new_publisher
  end

  def price
    @price
  end

  def price=(new_price)
    @price = new_price
  end

  def awesomeness
    @awesomeness
  end

  def awesomeness=(new_awesomeness)
    @awesomeness = new_awesomeness
  end

end
