## I have included puts statements just so you can see what is being output.  
require 'pry'
# Strings

# 1. Reverse the string, `"bananas"`.
puts "bananas".reverse
# 2. Return the substring, `"worry"`, from the string, `"What me worry?"`.
puts "What me worry?".slice(-6, 5)
# 3. Convert the string, `"90210"`, to an integer.
puts "90210".to_i
# 4. Capitalize the letter `"t"`, in the string, `"tony"`.
puts "tony".capitalize

# Arrays

# 1. Given the array `numbers = [1, 3, 5, 7]`, create a new array with each element 
# of `numbers` multiplied by three.
numbers = [1, 3, 5, 7]
puts numbers.map {|number| number * 3}
# 2. Given the array `instructors = ["McKenneth", "Hari", "Will", "Tony"],
# return a new array with only the instructors whose name is exactly four 
# characters long. 
instructors = ["McKenneth", "Hari", "Will", "Tony"]
puts instructors.select {|instructor| instructor.length == 4}
# 3. Given an array, `class_topics = ["backbone", "express", "javascript", "node"]`
#  print the following statements:
# "I have learned Backbone in WDI."
# "I have learned Express in WDI."
# "I have learned Javascript in WDI."
# "I have learned Node in WDI."
class_topics = ["backbone", "express", "javascript", "node", "ruby"]
class_topics.each do |class_topic|
	puts "I have learned #{class_topic.capitalize} in WDI."
end
# 4. Given the following array (of arrays):
# ```ruby
# sandwiches_with_costs = [["blt", 5], ["grilled cheese", 7], ["turkey_club_with_pesto", 9], 
# ["ramenburger", 6], ["portobello and spicy sauce compote", 10]]
# ```
# Create a hash using sandwich names as keys and cost amounts as values. 

# BONUS: Change the sandwich names from strings to symbols and use these symbols instead. Remember to replace spaces with underscores when you move from strings to symbols.
sandwiches_with_costs = [["blt", 5], ["grilled cheese", 7], ["turkey_club_with_pesto", 9], ["ramenburger", 6], ["portobello and spicy sauce compote", 10]]
menu = {}
sandwiches_with_costs.each do |sandwich_with_cost|
	menu[sandwich_with_cost[0]] = sandwich_with_cost[1]
end
puts menu

# BONUS
menu = {}
sandwiches_with_costs.each do |sandwich_with_cost|
	menu[sandwich_with_cost[0].split(" ").join("_").to_sym] = sandwich_with_cost[1]
end
puts menu
# ### Hashes

# Perform the following tasks using hash methods (note: you might also need to use some string and array methods).

# Given the hash:
# ```
# breakfast_prefs = {
# 	juice: "orange",
# 	syrup: "blueberry",
# 	potatoes: "steak fries",
# 	meat: "corned beef hash",
# 	carb: "Texas Toast"
# 	cups_of_coffee: 3,
# 	vegan: false
# }
# ```
breakfast_prefs = {
	juice: "orange",
	syrup: "blueberry",
	potatoes: "steak fries",
	meat: "corned beef hash",
	carb: "Texas Toast",
	cups_of_coffee: 3,
	vegan: false
}
# 1. Return an array containing only the keys of `breakfast_prefs`.
puts breakfast_prefs.keys
# 2. Return an array containing only the values of `breakfast_prefs`.
puts breakfast_prefs.values
# 3. Change the value of `:syrup` to `"boysenberry"`.
breakfast_prefs[:syrup] = "boysenberry"
# 4. Return a hash with the key-value pairs whose value is of type string.
only_strings = breakfast_prefs.select do |breakfast_option, breakfast_pref|
	breakfast_pref.is_a? String
end

puts only_strings
binding.pry