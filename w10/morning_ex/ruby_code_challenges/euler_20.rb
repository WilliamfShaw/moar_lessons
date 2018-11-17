require 'pry'

def factorial_sum(max)
	(1..max).map do |number|
		if number % 10 == 0
			(number / 10)
		else
			number
		end	
	end
end

e = factorial_sum(100).reduce(:*).to_s.split('').map(&:to_i).reduce(:+)



binding.pry