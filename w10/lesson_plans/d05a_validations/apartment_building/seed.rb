require_relative "database_config"
require_relative "models/apartment"
require_relative "models/building"
require_relative "models/owner"
require 'ffaker'

3.times do
  Owner.create({
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name
    })
end

2.times do
  Building.create({
    building_number: FFaker::Address.building_number,
    street_name: FFaker::Address.street_name,
    city: FFaker::Address.city,
    state: FFaker::Address.us_state,
    zip_code: FFaker::AddressUS.zip_code,
    floors: [3,4,5,6].sample
    })
end

6.times do
  Building.first.apartments << Apartment.create({
    apartment_number: FFaker::Address.building_number,
    bedrooms: [1,2,3,4].sample,
    bathrooms: [1,2,3,4].sample,
    vacant: [true, false].sample
    })

  Building.last.apartments << Apartment.create({
    apartment_number: FFaker::Address.building_number,
    bedrooms: [1,2,3,4].sample,
    bathrooms: [1,2,3,4].sample,
    vacant: [true, false].sample
    })
end

Owner.first.buildings << Building.first
Owner.first.buildings << Building.last
Owner.last.buildings  << Building.first

