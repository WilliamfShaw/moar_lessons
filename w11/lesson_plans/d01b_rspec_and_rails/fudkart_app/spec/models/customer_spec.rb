require_relative '../rails_helper'

describe Customer do

  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:name) }
  it { should validate_numericality_of(:food_love).only_integer }
  it { should validate_numericality_of(:food_love).is_greater_than(0) }
  it { should validate_numericality_of(:food_love).is_less_than_or_equal_to(10) }

  it { should have_and_belong_to_many(:food_carts) }

end
