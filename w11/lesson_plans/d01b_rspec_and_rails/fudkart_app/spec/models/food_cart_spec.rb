require_relative '../rails_helper'

describe FoodCart do

  it { should validate_presence_of(:rating) }
  it { should validate_numericality_of(:rating).only_integer }
  it { should validate_numericality_of(:rating).is_greater_than(0) }
  it { should validate_inclusion_of(:cuisine).in_array(["Halal", "Hot Dog", "Other"]) }

  it { should belong_to(:owner) }
  it { should have_and_belong_to_many(:customers) }

  describe '#out_of_business' do
    it 'sets "open" to false and persists' do
      fc = FoodCart.create!(
        open: true,
        rating: 4,
        cuisine: 'Halal'
      )
      fc.out_of_business
      expect(FoodCart.find(fc.id).open).to eq(false)
    end
  end

  describe '#upvote' do
    it 'increments the rating and persists' do
      fc = FoodCart.create!(
        open: false,
        rating: 3,
        cuisine: 'Hot Dog'
      )
      fc.upvote
      expect(FoodCart.find(fc.id).rating).to eq(4)
    end
  end

  describe '.best_carts' do
    it 'returns all carts in order from best to worst' do
      fc1 = FoodCart.create!(
        open: false,
        rating: 4,
        cuisine: 'Hot Dog'
      )

      fc2 = FoodCart.create!(
        open: true,
        rating: 5,
        cuisine: 'Other'
      )

      fc3 = FoodCart.create!(
        open: false,
        rating: 2,
        cuisine: 'Halal'
      )

      expect(FoodCart.best_carts).to eq([fc2, fc1, fc3])
    end
  end

  describe '.by_cuisine' do
    it 'returns all carts in order from best to worst' do
      fc1 = FoodCart.create!(
        open: false,
        rating: 4,
        cuisine: 'Hot Dog'
      )

      fc2 = FoodCart.create!(
        open: true,
        rating: 5,
        cuisine: 'Halal'
      )

      fc3 = FoodCart.create!(
        open: false,
        rating: 2,
        cuisine: 'Halal'
      )

      fc4 = FoodCart.create!(
        open: true,
        rating: 5,
        cuisine: 'Other'
      )

      halal_carts = FoodCart.by_cuisine('Halal')
      expect(halal_carts).to include(fc2)
      expect(halal_carts).to include(fc3)
      expect(halal_carts).not_to include(fc1)
      expect(halal_carts).not_to include(fc4)
    end
  end

end
