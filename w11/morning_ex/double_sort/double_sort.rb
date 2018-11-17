require 'pry'
def double_sort(array_of_strings)
	words, numbers = array_of_strings.partition do |element|
		element != element.to_i.to_s
	end
	words.sort!
	numbers.map!(&:to_i).sort!.map!(&:to_s)
	array_of_strings.map do |element|
		element != element.to_i.to_s ? words.shift : numbers.shift
	end
end

baking = ["sugar", "butter", "egg"]
# => ["butter", "egg", "sugar"]

numbers = ["12", "10", "3", "4", "1"]
# => ["1", "3", "4", "10", "12"]

baking_numbers = ["16", "8", "4", "salt", "baking", "soda"]
# => ["4", "8", "16", "baking", "salt", "soda"]

banana_numbers = ["2", "4", "banana", "1", "vanilla", "flour"]
# => ["1", "2", "banana", "4", "flour", "vanilla"]

all_the_stuff = ["123","12","capp","apple","13","zogg","doge","5","5","5","poop","1","0","poop"]
# => ["0","1","apple","capp","5","doge","poop","5","5","12","poop","13","123","zogg"]

binding.pry
