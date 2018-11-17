require_relative 'database_config'
require_relative 'models/user'

names = %w(Will Hari Tony)
email = %w(w@i.l h@r.i t@n.y)
age = [51, 50, 52]
birthdate = %w(10-10-1964 10-10-1965 10-10-1963)
state = %w(AK IN CA)
hometown = %w(Juneau Kerala Yosemite)
favorite_food = %w(Watermelon Oatmeal Tuna)

names.each_with_index do |name, idx|
	User.create({
		name: name,
		email: email[idx],
		age: age[idx],
		birthdate: birthdate[idx],
		state: state[idx],
		hometown: hometown[idx],
		active: true,
		favorite_food: favorite_food[idx]
	})
end
