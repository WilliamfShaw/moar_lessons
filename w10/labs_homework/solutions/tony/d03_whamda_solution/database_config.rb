require 'active_record'

ActiveRecord::Base.establish_connection({
	host: 'localhost',
	database: 'whamda_app_development',
	adapter: 'postgresql'
})
