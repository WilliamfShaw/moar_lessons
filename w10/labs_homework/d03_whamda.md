# Week 10 - Day 3

## Learning Objectives

- Practice using ActiveRecord (Ruby ORM)
- Practice writing Instance and Class methods for Ruby Classes
- Practice problem solving using Ruby

![Ruby PDA](http://3.bp.blogspot.com/_meOqSET4ano/Sw0w_G73J6I/AAAAAAAAADE/T2UIuqNzXs0/s320/star-ruby-box-photo.gif)

WHAMCO stays ahead of the curve. People think they want a SmartWatch, but really what they need is a monochromatic, backlit, unconnected to the interwebs, Personal Digital Assistant.  Introducing WHAMda, a device that allows users to track their Contacts, Tasks, and calculate tips (every good PDA calculates tips)!

We will be building WHAMda's software platform this evening, with our new tools; Ruby and ActiveRecord, along with our familiar PostgreSQL DB.  

### Step 1 - DB Schema

Make a database for our app with two tables, tasks and contacts.  These two tables are not related to each other.

Contacts have the following attributes (datatype)

- `id` (pk)
- `name` (string)
- `phone_number` (string)
- `email_address` (string)

Tasks have the following attributes (datatype)

- `id` (pk)
- `task_name` (string)
- `priority` (integer) Note: Higher number means higher priority.  
- `time` (string)
- `done` (boolean)

### Step 2 - Configure Database

Create a `database_config.rb` file to establish a connection between our app's database and our Ruby Class Models.  

### Step 3 - Models and their methods.

Inside of a directory called `models`, create a file for each our `Task` class and our `Contact` class.  Both classes must inherit from ActiveRecord.  These classes will have the methods listed below.

#### Contact
- `.get_info` - an **instance** method that returns a user's information.

#### Task
- `.get_info` - an **instance** method that returns a task's information.
- `.finish` - an **instance** method that changes a task's `done` value from `false` to `true`
- `.doing` - a **class** method that returns all tasks that have not been completed.  
- `.completed` - a **class** method that returns all tasks that have been completed.
- `.prioritized` - a **class** method that returns all tasked sorted by their priority, from high to low.   

### Step 4 - Seed Test

Create a seed file.  Inside of it, require pry, database_config, and both model files.  Then include a binding.pry.  

# STOP

Run the seed file; pry should begin.  Use this pry session to test:

1. Basic CRUD actions on contacts and tasks.  
2. Functionality of class and instance methods.  

Once you have tested that these methods work....

### Step 5 - Write seed script

In the seed file, write a seed script that will create some users and tasks.  
- Have your script create at least 4 contacts.  
- Have your script create at least 10 tasks.  Make sure that your script creates some tasks that are done and others that are not yet done.  

### Step 6 - Write Logic for WHAMda

Create a Ruby file to run our app in the terminal.  

When the app is run, users should be shown a main menu with 4 options:

1. Contacts
2. Tasks
3. Tip Calculator
4. Quit

#### Choosing 1 should bring up a contacts menu:

1. View all contacts
2. Find contact by name
3. Create new contact
4. Remove a contact
5. Go Back

Choosing any of these options should allow a user to perform the selected action. Choosing 5 will take us back to the main menu.   

#### Choosing 2 should bring up a tasks menu:

1. View all tasks
2. Create a new task
3. Delete a task
4. Mark task as done
5. View all completed tasks
6. View all incomplete tasks
7. View prioritized task list (Should return task ordered by priority; higher number = higher priority) 
8. Go Back

Choosing any of these options should allow a user to perform the selected action.  Choosing 8 will take us back to the main menu.  

#### Choosing 3 will start a tip calculator.  Allow a user to input a bill total and a tip percentage.  

#### Choosing 4 will close our app.  

**Completion for this HW will range 0-10, 1 point each Steps 1 - 5 and the following rubric for Step 6:** 

| Value | Target |
| ----- | -------|
| 1  | Users can view all tasks and contacts, and view specific tasks and contacts |
| 2  | Users can create and delete tasks and contacts | 
| 3 | Users can mark a task as done |
| 4 | Users can view complete, incomplete, and prioritized Task Lists |
| 5 | Full functionality and two levels of user menus |
