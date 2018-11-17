class Contact < ActiveRecord::Base

	def get_info
		[
			"-----------------------------------------",
			"contact: #{name}",
			"phone_number: #{phone_number}",
			"email_address: #{email_address}",
			"-----------------------------------------"
		].join("\n")
	end

end