require_relative '../rails_helper'

describe Owner do

  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:name) }
  it { should validate_numericality_of(:skill).only_integer }
  it { should validate_numericality_of(:skill).is_greater_than(0) }
  it { should validate_numericality_of(:skill).is_less_than_or_equal_to(5) }

  it { should have_many(:food_carts) }

end
