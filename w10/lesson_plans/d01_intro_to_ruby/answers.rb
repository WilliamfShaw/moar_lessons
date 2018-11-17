# each
board = [
  ["hari", 50, "sananab"],
  ["sarah", 42, "netulg"],
  ["mckenneth", 9001, "poop"]
]

board.each do |member|
  puts "Name: #{member[0].capitalize}"
  puts "Age: #{member[1]}"
  puts "Favorite Word: #{member[2].reverse}"
end

# select
(1...1000).select { |num| num % 3 == 0 || num % 5 == 0 }.reduce(:+)

# Array.new(1000).map!.with_index{ |num, i| i + 1}

# will create a range of numbers 1-999 that we can iterate over

#reject

converted_numbers = array_of_numbers.map { |num| num.to_i }
even_numbers = converted_numbers.select { |num| num % 2 == 0 }
total = even_numbers.reduce(:+)

puts total

# pokemon
  all_pokemon = pokemon.map do |poke_hash|
    name = poke_hash[:name]
    poke_id = poke_hash[:national_id]

    capitalized_species = poke_hash[:species].split(" ").map do |each_word|
      each_word.capitalize
    end

    weight = poke_hash[:weight]
    types = poke_hash[:types].values

    info_string = "#{name} | #{poke_id}\n"
    info_string += "Species: #{capitalized_species.join(' ')}"
    info_string += " | Weight: #{weight}\n"
    info_string += "Types: #{types.join(' // ')}"

    info_string
  end

  puts all_pokemon.join("\n\n")

# Luhn
puts 'Please enter a credit card number'
print '>'
card_number = gets.chomp
holder = []
split_numbers = card_number.to_s.split('').reverse

split_numbers.each_with_index do |num, index|
  if index % 2 == 0
  	holder << num.to_i
  else
  	holder << num.to_i * 2
  end
end

split_again = holder.join.split('')
sum = split_again.map { |num| num.to_i }.reduce(:+)
if sum % 10 == 0
	puts "Valid card number, thank you"
else
	puts "Invalid credit card number!"
end