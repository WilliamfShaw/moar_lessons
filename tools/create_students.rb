# Creates student_named branches on GitHub Instructor repo for Homework pull requests
# usage: create_branch_for "Student Name"
# relies on https://developer.github.com/v3/git/refs/

require 'pry'
require 'yaml'
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

def url
  return "#{base_url}/repos/#{REPO_OWNER}/#{CLASS_REPO}/git/refs"
end

def sha
  # https://developer.github.com/v3/git/refs/#get-a-reference
  response = HTTParty.get(url)[0]
  return response['object']['sha']
end

def snake_case(name)
  return name.gsub(" ", "_").downcase
end

def build_payload_for(student)
  new_branch_name = snake_case(student)
  return { ref: "refs/heads/#{new_branch_name}", sha: sha }.to_json
end

def create_branch_for(student)
  # https://developer.github.com/v3/git/refs/#create-a-reference
  payload = build_payload_for(student)
  HTTParty.post(url, body: payload)
end

students = YAML.load_file('students.yml')

students.each { |student| create_branch_for(student) }

puts "Created #{students.length} student branches on ga-students"