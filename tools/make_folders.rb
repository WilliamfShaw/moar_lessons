# BASE_DIR = "Users/macadocious/WDI/WDI_McClane_Instructors"

weeks = %w(w01 w02 w03 w04 w05 w06 w07 w08 w09 w10 w11 w12 w13 w14 w15)
days = %w(d01 d02 d03 d04 d05)

readme = <<README
#Week WEEK_NUM

###What did we do last week?

###What are we doing this week?

|Monday           | Tuesday         |Wednesday        |Thursday         |  Friday
|:-----           |:-----           |:-----           |:-----           |:-----
|                 |                 |                 |                 |

###Supplemental Reading

###What are we doing next week?
README

lesson_plan = <<-LESSON_PLAN
Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# TITLE

## Learning Objectives

## Outline

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?

LESSON_PLAN

lab = <<-LAB
# Lab
LAB


weeks.each_with_index do |week, week_index|
  `mkdir -p #{BASE_DIR}/#{week}/lesson_plans`
  `mkdir -p #{BASE_DIR}/#{week}/labs_homework`

  week_num = (week_index + 1).to_s
  readme_text = readme.gsub("WEEK_NUM", week_num)
  File.open("#{BASE_DIR}/#{week}/README.md", 'w') {|f| f.write(readme_text) }

  days.each_with_index do |day, day_index|
    File.open("#{BASE_DIR}/#{week}/lesson_plans/#{day}a.md", 'w') {|f| f.write(lesson_plan) }
    File.open("#{BASE_DIR}/#{week}/lesson_plans/#{day}b.md", 'w') {|f| f.write(lesson_plan) }
    File.open("#{BASE_DIR}/#{week}/labs_homework/#{day}.md", 'w') {|f| f.write(lab) }
  end
end
