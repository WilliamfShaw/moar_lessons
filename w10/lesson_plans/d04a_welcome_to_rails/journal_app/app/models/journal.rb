class Journal < ActiveRecord::Base
  has_many :entries
end
