require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  database: 'bloggr_app_development',
  adapter: 'postgresql'
)

class User < ActiveRecord::Base
  has_many :posts
end

class Post < ActiveRecord::Base
  belongs_to :user
  has_and_belongs_to_many :tags
end

class Tag < ActiveRecord::Base
  has_and_belongs_to_many :posts
end

binding.pry
