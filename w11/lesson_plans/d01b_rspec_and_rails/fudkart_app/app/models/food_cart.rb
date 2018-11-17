class FoodCart < ActiveRecord::Base

  validates_presence_of :rating
  validates_numericality_of :rating, only_integer: true, greater_than: 0
  validates_inclusion_of :cuisine, in: ["Halal", "Hot Dog", "Other"]

  belongs_to :owner
  has_and_belongs_to_many :customers

  def out_of_business
    self.update({ open: false })
  end

  def upvote
    self.update({ rating: self.rating + 1 })
  end

  def self.best_carts
    self.order({ rating: :desc })
  end

  def self.by_cuisine(cuisine_type)
    self.where({ cuisine: cuisine_type })
  end

end
