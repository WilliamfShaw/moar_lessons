loop do
puts "Please select a math operation:"
puts "add\nsubtract\nmultiply\ndivide"
puts "Or q to quit"
print ">"
operation = gets.chomp.to_sym

break if operation == :q

puts "Please input two numbers:"
print "Num 1 ->"
num_one = gets.chomp.to_i
print "Num 2 ->"
num_two = gets.chomp.to_i

if operation == :add
	puts "The answer is #{ num_one + num_two }"
elsif operation == :subtract
	puts "The answer is #{ num_one - num_two }"
elsif operation == :multiply
	puts "The answer is #{ num_one * num_two }"
elsif operation == :divide
	puts "The answer is #{ num_one / num_two }" if num_two != 0
	puts "Sorry no zero division in my house" if num_two == 0
end

end