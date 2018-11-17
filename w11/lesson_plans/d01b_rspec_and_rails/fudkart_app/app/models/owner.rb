class Owner < ActiveRecord::Base

  validates_presence_of :name
  validates_uniqueness_of :name
  validates_numericality_of :skill,
    only_integer: true,
    greater_than: 0,
    less_than_or_equal_to: 5

    has_many :food_carts
    
end
