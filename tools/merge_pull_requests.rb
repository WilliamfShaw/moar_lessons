# Merges pull requests from student_named branches into class repository
# usage: merge_and_log
# relies on https://developer.github.com/v3/git/refs

require 'pry'
require 'httparty'

GITHUB_NAME = ENV['GITHUB_USERNAME']
GITHUB_PASS = ENV['GITHUB_PASSWORD']
CLASS_REPO  = ENV['CLASS_REPO']
REPO_OWNER  = ENV['REPO_OWNER']

def base_url
	return "https://#{github_auth}@api.github.com"
end

def github_auth
	return "#{GITHUB_NAME}:#{GITHUB_PASS}"
end

def request_url
	return "#{base_url}/repos/#{REPO_OWNER}/#{CLASS_REPO}/pulls"
end

def get_pull_requests
	response = HTTParty.get(request_url)
	return parse_pull_requests(response)
end

def parse_pull_requests(pulls)
	parsed_pulls = pulls.map do |pull|
		{
			number: pull['number'],
			hw_stats: JSON.parse(pull['body']),
			student: pull['user']['login']
		}
	end
	return parsed_pulls
end

def merge_and_log
	pull_requests = get_pull_requests
	merge_all_pulls(pull_requests)
	log_pull_data(pull_requests)
end

def log_pull_data(pull_requests)
	pull_requests.each do |pull|
		student = Student.find_by(github_username: pull[:student])
		student.assignments.create(pull[:hw_stats])
	end
end

def merge_all_pulls(pull_requests)
	pull_requests.each do |pull|
		merge_url = "#{request_url}/#{pull[:number]}/merge"
		merge_single_pull(merge_url)
	end
end

def merge_single_pull(resource)
	HTTParty.put(resource, :body => {commit_message: 'Merged'}.to_json)
end

# Merge And Log
merge_and_log