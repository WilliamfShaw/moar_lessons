class Building < ActiveRecord::Base
  has_many :apartments, dependent: :destroy
  has_and_belongs_to_many :owners

  def self.locations
    self.all.map { |building| building.details }
  end

  def details
    "#{building_number} #{street_name} -- #{city},  #{state} #{zip_code}"
  end

end