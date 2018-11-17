require 'pry'
class Consolidator

  BASE_DIR = '../'
  OUTPUT_DIR = 'resources/' # relative from BASE_DIR
  OUTPUT_FILE = 'learning_objectives.md'
  WEEKS = %w(w01 w02 w03 w04 w05 w06 w07 w08 w09 w10 w11 w12)
  LESSON_PLAN_DIR = 'lesson_plans/'

  def initialize
    @lesson_plans = {}
  end

  def folder_for(week)
    "#{BASE_DIR}#{week}/#{LESSON_PLAN_DIR}"
  end

  def directory?(week, entry)
    File.directory?(folder_for week + entry)
  end

  def file_paths(week)
    begin
      lesson_entries = Dir.entries(folder_for week).select do |p|
        p.include?('d0') # ex. d01_ruby, d02_rails...
      end
    rescue
      return []
    end

    lesson_plans = []

    lesson_entries.each do |entry|
      binding.pry
      if directory?(week, entry)
        lesson_plans.push('THIS IS A FILE ' + entry)
      else
        lesson_plans.push(folder_for(week) + entry)
      end
    end
    puts lesson_plans
  end

  def consolidate
    WEEKS.each do |week|
      # puts week.upcase
      # puts '-------------'
      # puts file_paths(week)
      # puts '-------------'
      file_paths(week)
    end
  end
end


Consolidator.new.consolidate
