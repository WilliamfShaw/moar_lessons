class AddOwnerIdToFoodCarts < ActiveRecord::Migration
  def change
    add_column :food_carts, :owner_id, :integer
    add_foreign_key :food_carts, :owners
  end
end
