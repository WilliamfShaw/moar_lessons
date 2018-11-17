class FoodCart < ActiveRecord::Base

  def out_of_business
    self.update({ open: false })
  end

  def upvote
    self.update({ rating: self.rating + 1 })
  end

  def self.best_carts
    self.order({ rating: desc })
  end

  def self.by_cuisine(cuisine_type)
    self.where({ cuisine: cuisine_type })
  end

end
