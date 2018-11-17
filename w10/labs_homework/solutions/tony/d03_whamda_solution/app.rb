require 'pry'
require_relative 'database_config'
require_relative 'models/contact'
require_relative 'models/task'
binding.pry
def main_menu
	["-----------------------------------------",
  "WHAMCo Digital Assistant",
  "-----------------------------------------",
  "Welcome to WHAMda",
  "1. Contacts",
  "2. Tasks",
  "3. Tip Calculator",
  "4. Quit",
  "-----------------------------------------"].join("\n")
end

def contact_menu
	["-----------------------------------------",
  "Contacts",
  "-----------------------------------------",
  "1. View all contacts",
  "2. Find contact by name",
  "3. Create new contact",
  "4. Remove a contact",
  "5. Go Back",
  "-----------------------------------------"].join("\n")
end

def contact_options
	user_input = gets().chomp()
	if user_input == '1'
		Contact.all.each do |contact|
			puts contact.get_info
		end
	elsif user_input == '2'
		puts("-----------------------------------------")
		puts "Enter contact number"
		contact_name = gets().chomp()
		contact = Contact.find_by({name: contact_name})
		puts contact.get_info
	elsif user_input == '3'
		puts("-----------------------------------------")
		puts "Name:"
		new_contact_name = gets().chomp()
		puts("-----------------------------------------")
		puts "Phone Number:"
		new_contact_phone_number = gets().chomp()
		puts("-----------------------------------------")
		puts "Email Address:"
		new_contact_email_address = gets().chomp()
		contact.create({
			contact_name: new_contact_name,
			phone_number: new_contact_phone_number,
			email_address: new_contact_email_addressm
		})
	elsif user_input == '4'
		puts("-----------------------------------------")
		puts "Enter contact name to delete"
		contact_name = gets().chomp()
		contact = Contact.find_by({name: contact_name}).delete
	end
end

def task_menu
	["-----------------------------------------",
  "Tasks",
  "-----------------------------------------",
  "1. View all tasks",
  "2. Create a new task",
  "3. Delete a task",
  "4. Mark task as done",
  "5. View all completed tasks",
  "6. View all incomplete tasks",
  "7. View prioritized task list",
  "8. Go Back",
  "-----------------------------------------"].join("\n")
end

def task_options
	user_input = gets().chomp()
	if user_input == "1"
		Task.all.each do |task|
			puts task.get_info
		end
	elsif user_input == "2"
		puts("-----------------------------------------")
		puts "task:"
		new_task_name = gets().chomp()
		puts("-----------------------------------------")
		puts "priority:"
		new_task_priority = gets().chomp()
		puts("-----------------------------------------")
		puts "time:"
		new_task_time = gets().chomp()
		Task.create({
			task_name: new_task_name,
			priority: new_task_priority,
			time: new_task_time,
			done: false
		})
	elsif user_input == "3"
		puts("-----------------------------------------")
		puts "What task number are you deleting?"
		delete_task_number = gets().chomp()
		Task.delete(delete_task_number)
	elsif user_input == "4"
		puts("-----------------------------------------")
		puts "What task number did you complete?"
		task_number = gets().chomp()
		Task.find(task_number).finished
	elsif user_input == "5"
		puts("-----------------------------------------")
		puts "All completed tasks:"
		puts("-----------------------------------------")
		Task.completed.each do |task|
			puts task.get_info
		end
	elsif user_input == "6"	
		puts("-----------------------------------------")
		puts "All incomplete tasks:"
		puts("-----------------------------------------")
		Task.doing.each do |task|
			puts task.get_info
		end
	elsif user_input == "7"
		puts("-----------------------------------------")
		puts "Prioritized List"
		puts("-----------------------------------------")
		Task.prioritized.each do |task|
			puts task.get_info
		end
	end
end

# finish this otmorrow you got this.  

def tip_menu
	puts("-----------------------------------------")
  puts("Tip")
  puts("-----------------------------------------")
  puts("Enter the bill total")
  bill = gets().chomp().to_i
  puts("Enter tip percentage")
  tip_percentage = gets().chomp().to_f
  tip_calc(bill, tip_percentage)
end

def tip_calc(bill_total, tip_percentage)
	bill_total * tip_percentage / 100
end

def quit_hamda()
  puts("Goodbye!")
  exit
end

loop do
  puts main_menu
  puts("Enter a number:")
  user_input = gets().chomp()
  if user_input == '1'
  	puts contact_menu
  	contact_options
  elsif user_input == '2'
  	puts task_menu
  	task_options
  elsif user_input == '3'
  	puts tip_menu
  elsif user_input == '4'
  	quit_hamda
	end
end




binding.pry