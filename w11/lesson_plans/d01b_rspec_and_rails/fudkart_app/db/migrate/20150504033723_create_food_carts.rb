class CreateFoodCarts < ActiveRecord::Migration
  def change
    create_table :food_carts do |t|
      t.boolean :open
      t.integer :rating
      t.string :cuisine
    end
  end
end
