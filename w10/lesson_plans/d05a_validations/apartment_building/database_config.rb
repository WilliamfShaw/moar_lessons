require 'active_record'

ActiveRecord::Base.establish_connection({
  host: 'localhost',
  database: 'wham_rental_db',
  # database: 'sandbox',
  adapter: 'postgresql'
})
