#### Learning Objectives
- Create a web app using the MVC architecture of Rails
- Utilize Rails conventions to create database tables and seed them
- Utilize Rails form, link and path helpers

## Step 1 - Rails Set Up
Create a new rails app called `team_app`. Make sure that your database is set to PostgreSQL when you initialize your rails app. Create your database. Include the `pry-rails` gem and bundle install again.

## Step 2 - Migrations and Tables
You will have one table teams. 

Generate a new migration for teams. An team entry should have:
- a name - a String
- a photo_url - a String
- a hometown - a String
- a number_of_championships - an Integer
- timestamps

Please feel free to add other attributes if you would like. 

Run your migration

Seed your database with 4 teams.

## Step 3 - Routing, Controllers and Views
Define your routes and controllers for teams. Define the necessary views for teams.

- Your homepage should show a list of all teams, and when clicked should take the user to the team's show page. Your homepage should also have a link to add a new team. 
- The show page should list all of the team's information, There should be a link to edit the team that will take the user to the edit page
- The edit page should allow the user to update the teams information as well as display a button allowing a user to remove the team from the database. 

A user should easily be able to get to the homepage from any section of the site. 

## Step 4 - REVIEW

- Look at your work and compare it against the specifications of the assignment. Make sure your app has the functionality you expect.
- Make sure all necessary buttons/links are present
- Step through the process of using your site. Click every button, submit every form.
