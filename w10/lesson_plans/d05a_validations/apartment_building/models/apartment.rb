class Apartment < ActiveRecord::Base
  belongs_to :building

  validates :apartment_number,
            presence: true
  validates :bedrooms,
            presence: true,
            numericality: { greater_than_or_equal_to: 0 },
            numericality: { less_than_or_equal_to: 5 }
  validates :bathrooms,
            presence: true,
            numericality: { greater_than_or_equal_to: 1 },
            numericality: { greater_than_or_equal_to: 5 }
  validates :vacant,
            presence: true,
            inclusion: { in: [true, false]}

  def details
    info_string = "Apartment #{apartment_number} has #{bedrooms} bedrooms and #{bathrooms} bathrooms"
    info_string += vacant ? "and is vacant" : " but it's taken."

    info_string
  end

  def self.vacancies
    self.where({ vacant: true })
  end

  def self.rented
    self.where({ vacant: false })
  end
end