# Week 5 Assessment

Please work alone. Please use tools such as the Chrome Console, to test writing your code.

Copy the assessment into your w05/d05 directory.  

Please work in a gist.  

The first 4 questions will assess your ability to recall and explain core concepts from the week with your own words. Please answer them in the this markdown itself. Each question should be answered within a few sentences.    

The last 3 questions will assess you to build a node app, given a necessary starter kit.

1. What are the advantages of using a database as a means to store persistant data?  Please reference ACID.  

2. Explain how a web server (like the ones we have written this week) processes incoming requests from a client (browser) step-by-step.

3. What is a database schema?  Why do we define and redefine our schema using migration files?
  
4. Given the following route from an express.js server file:

```js
app.put('/orders/:id', function(req, res) {
	var orderId     = req.params.id;
	var orderParams = req.body;

	Order
		.findOne(orderId)
		.then(function(order) {
			order
				.update(orderParams)
				then(function(updatedOrder) {
					res.send( updatedOrder );
				});
		});
});
```

Explain what this code is doing.  What does the server do when this route is visited?  What changes are made to our database?  What does the browser do?  (You may assume that everything works and has been defined in context).

Questions 5 - 7 all are related to creating a Node Server that delivers API data from a database.

WHAMCO is building a payroll app.  We will only be concerning ourselves with JSON responses from our server today.  Our database only has an employees table currently, tracking an employee's name, salary, and position.  

5. Setup + Create Database

You have been provided all of the necessaries files.  Your package.json has all of the necessary middleware dependencies listed.  You have the migration file and the model file.

Create a database named 'payroll_app_development'

Run the seed file.  

6. Write server.js, defining all necessary variables, the root route, and the 5 RESTful routes for employees.  

7. To show that the create, update and destroy routes work, test them in the browser by hitting our server with appropriate AJAX requests.  List the 3 AJAX requests below.  
