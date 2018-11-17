class Building < ActiveRecord::Base
  has_many :apartments, dependent: :destroy
  has_and_belongs_to_many :owners

  validates :building_number,
            presence: true,
            numericality: { only_integer: true}
  validates :street_name,
            presence: true
  validates :city,
            presence: true
  validates :state,
            presence: true,
            inclusion: { in: ['NY', 'NJ', 'CT'] }
  validates :zip_code,
            presence: true,
            numericality: { only_integer: true }
  validates :floors,
            presence: true,
            numericality: { greater_than: 0 },
            numericality: { less_than_or_equal_to: 50 }

  def self.locations
    self.all.map { |building| building.details }
  end

  def details
    "#{building_number} #{street_name} -- #{city},  #{state} #{zip_code}"
  end

end