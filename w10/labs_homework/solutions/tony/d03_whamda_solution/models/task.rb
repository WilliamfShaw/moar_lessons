class Task < ActiveRecord::Base

	def finish
		self.update({done: true})
	end

	def get_info
		[
			"-----------------------------------------",
			"task: #{task_name}",
			"task_id: #{task_id}",
			"priority: #{priority}",
			"time: #{time}",
			"done: #{done}",
			"-----------------------------------------"
		].join("\n")
	end

	def self.completed
		self.where({done: true})
	end

	def self.doing
		self.where({done: false})
	end

	def self.prioritized
		self.order(priority: :desc)
	end
end
