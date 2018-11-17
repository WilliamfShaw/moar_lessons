class CreateCustomersFoodCarts < ActiveRecord::Migration
  def change
    create_join_table :customers, :food_carts do |t|
      t.index :customer_id
      t.index :food_cart_id
    end
  end
end
