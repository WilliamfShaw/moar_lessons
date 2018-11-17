require 'yaml'
students = YAML.load_file('students.yml')
students.shuffle.each { |s| puts s }
