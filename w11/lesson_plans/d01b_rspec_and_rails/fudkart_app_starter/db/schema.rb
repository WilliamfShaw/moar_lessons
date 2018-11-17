# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150504033837) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customers", force: :cascade do |t|
    t.string  "name"
    t.integer "food_love"
  end

  create_table "customers_food_carts", id: false, force: :cascade do |t|
    t.integer "customer_id",  null: false
    t.integer "food_cart_id", null: false
  end

  add_index "customers_food_carts", ["customer_id"], name: "index_customers_food_carts_on_customer_id", using: :btree
  add_index "customers_food_carts", ["food_cart_id"], name: "index_customers_food_carts_on_food_cart_id", using: :btree

  create_table "food_carts", force: :cascade do |t|
    t.boolean "open"
    t.integer "rating"
    t.string  "cuisine"
    t.integer "owner_id"
  end

  create_table "owners", force: :cascade do |t|
    t.string  "name"
    t.integer "skill"
  end

  add_foreign_key "food_carts", "owners"
end
