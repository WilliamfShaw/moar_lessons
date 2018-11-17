# Week 10 Assessment

Please work alone. Please record your answers in the space provided.  

`1.` Explain the differences between `Array.each` and `Array.map`.  Use an example.
















`2.` What is a Hash in Ruby?  What are some similarities/differences between a Ruby Hash and a Javascript Object?











`3.` Given the following hash:
```ruby
tonys_stuff = {
	hats: [
		'yankees fitted cap',
		'beachhat',
		'sweet visor'
	],
	books: [
		'Chicken Soup for the Dev Soul',
		"O'Reilly Lean Cobol (the one with the boll weevil on the cover)",
		'In Search of Lost Time'
	],
	sunglasses: true,
	snacks: {
		cookies: [
			'oreos',
			'fig newtons'
		],
		chips: [
			'funyuns',
			'pringles',
			'cheetos'
		],
		healthy: [
			'gorp',
			'museli',
			'soy chips'
		]
	}
}

```

How would you access 'pringles'?









`4.` Write a method called `pied_piper` that takes an array of strings as an argument.  The method should return those strings separated by pipes.  For example:
```ruby
> def pied_piper(['basketball', 'football', 'jai alai'])
"basketball | football | jai alai"
```











`5.` What is SQL?  What are some benefits to using SQL vs. using an ORM?











`6.` Rails is a web framework with an rMVC architecture.  E
Explain what rMVC is/how it works.  












`7.`  What are the 7 RESTful Routes?  Explain what controller action occurs along each route.  

















Questions 8 - 11 will be about an app called Fud.Kart, an app that allows users to record their favorite foodcarts around NYC.  

`8.` Given that our database with has a table of food carts and an associated ActiveRecord food carts class, what would be returned by the following code:

```ruby
FoodCart.where({cuisine_type: "Halal"}).order({rating: :desc}).limit(5)
``` 







`9.` Concerning food carts in our app, what is the name of the food cart:

a) model class


b) model file


c) the controller


d) the controller file


If we were working on the route to see all food carts:

e) What should the route (verb + path) be?


f) Which controller action should be associated to this route?


g) What should the name of the view file be?





Questions 10 and 11 will reference the FoodCart class file below

```ruby
class FoodCart < ActiveRecord::Base
  has_and_belongs_to_many :users

	def out_of_business
		self.update({open: false})
	end

	def upvote
		self.update({rating: self.rating += 1})
	end

	def self.best_carts
		self.order({rating: desc})
	end

	def self.by_cuisine(cuisine_type)
		self.where({cuisine: cuisine_type})
	end

end

```

`10.` What relationship do Food Carts have with Users in this database?








`11.` Explain what each Food Cart method does above.  Identify whether each is a Class or Instance method.  







