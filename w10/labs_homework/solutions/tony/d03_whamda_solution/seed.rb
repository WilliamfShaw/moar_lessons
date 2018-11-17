require 'pry'
require_relative 'database_config'
require_relative 'models/contact'
require_relative 'models/task'

Contact.destroy_all
Task.destroy_all

names = %w(Will Hari Tony McK)
numbers = %w(1 2 3 4 5 6 7 8 9 0)
email_domains = %w(askjeeves lycos geocities prodigy)

names.each do |name|
	Contact.create({
		name: name,
		phone_number: numbers.sample(10).join(''),
		email_address: "#{name}@#{email_domains.sample}.com"
	})
end

tasks = ["Mow the lawn", "Refactor the codes", "Make the doughnuts", "Finish writing the book", "Eat the cakes", "Learn COBOL", "Carpentry stuff"]
priorities = [1, 2, 3, 4, 5]
times = %w(today tomorrow Friday October November Enero)

20.times do
	Task.create({
		task_name: tasks.sample,
		priority: priorities.sample,
		time: times.sample,
		done: [true, false].sample
	})
end