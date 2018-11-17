class Apartment < ActiveRecord::Base
  belongs_to :building

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