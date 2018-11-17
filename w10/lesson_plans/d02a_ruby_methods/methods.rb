require 'pry'

def greeting
  puts 'Well, hello there!'
end

def personalized_greeting(name)
  puts "Well, hello there, #{name}!"
end

def triple_add(num1, num2, num3)
  # This could work
  # return num1 + num2 + num3
  # But implicit returns!
  num1 + num2 + num3
end

binding.pry
