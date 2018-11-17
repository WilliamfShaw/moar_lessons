require 'pry'

def only_squares(array_of_numbers)
	array_of_numbers.select do |number|
		Math.sqrt(number) == Math.sqrt(number).to_i
	end
end

only_squares([1,2,4,6,9])

binding.pry