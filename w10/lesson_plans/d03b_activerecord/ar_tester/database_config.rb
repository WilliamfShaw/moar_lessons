require 'active_record'

ActiveRecord::Base.establish_connection({
	host: 'localhost',
	database: 'sandbox',
	adapter: 'postgresql'
})
