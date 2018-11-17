class Customer < ActiveRecord::Base

  validates_presence_of :name
  validates_uniqueness_of :name
  validates_numericality_of :food_love,
    only_integer: true,
    greater_than: 0,
    less_than_or_equal_to: 10

  has_and_belongs_to_many :food_carts
  
end
