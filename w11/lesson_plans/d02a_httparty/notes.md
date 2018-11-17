Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# HTTParty

## Learning Objectives

- Use a gem to add functionality to our application
- Use HTTParty to make a request to an external service
- Add a model to a rails app to wrap an API
- Build a Backbone app on top of Rails

## Outline

> 10am-11am -- read markdown/walkthrough/docs
> 11am-1130am -- Add a giphy api wrapper to a rails app

# Gifbomb

```
rails new gifbomb_app --database postgresql -T
cd gifbomb_app

gem 'httparty'
bundle install

rake db:create

touch app/models/giphy_wrapper.rb
touch app/controllers/gifs_controller.rb
```

In routes.rb

```
get '/gifs/search' => 'gifs#search'
```

## Backbone

- gem 'backbars'
- rails g backbars
- https://gist.github.com/DrRobotmck/1e4ad94fb47580fbe9e3

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
