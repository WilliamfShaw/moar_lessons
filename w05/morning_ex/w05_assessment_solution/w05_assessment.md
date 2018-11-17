# Week 5 Assessment

Please work alone. Please use tools such as the Chrome Console, to test writing your code.

Copy the assessment into your w05/d05 directory.  

Please work in a gist.  

The first 4 questions will assess your ability to recall and explain core concepts from the week with your own words. Please answer them in the this markdown itself. Each question should be answered within a few sentences.    

The last 3 questions will assess you to build a node app, given a necessary starter kit.

1. What are the advantages of using a database as a means to store persistant data?  Please reference ACID.  

Databases feature:
Atomicity - transactions (reading, writing, destroying) occur in whole and can not be saved in part.

Consistency - databases maintain rules that developers write for the data living in the DB.  

Isolation - transactions are executed in isolation from each other, such that they might handle concurrent transactions serially.

Durability - the database is resilient against both threats to its hardware and software components.  

2. Explain how a web server (like the ones we have written this week) processes incoming requests from a client (browser) step-by-step.

	1. A request is made to the server based upon the url specified by the user.  
	2. The server seeks a matching route.  
	3. The server returns an error if the route is not found.
	4. Else server proceeds to execute the instructions described for the route indicated.  Generally, these steps involve taking some input per the path params AND/OR the body params and using it to perform a CRUD action.  
	5. Finally, the server returns a response to the client indicating that their crud action has been performed and the browser uses this information to render user feedback.  


3. What is a database schema?  Why do we define and redefine our schema using migration files?
 
A database schema is a way to organize a database into tables of entities with their properties along with a the relationship between these tables. 

We use migrations to define and redefine our schema because they allow us to save states of our database.  Data currently living in the database can be persisted even after we change our schema.   

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

### ANSWER

This route is written to process updates given the path '/orders/' with a variable id.  The order's id is captured in a variable from the path and the updated order info from the body is saved in another variable.  

We find the Order of interest.  Then, we update this order based on the updated order info and send this back as a response from our server.  

Questions 5 - 7 all are related to creating a Node Server that delivers API data from a database.

WHAMCO is building a payroll app.  We will only be concerning ourselves with JSON responses from our server today.  Our database only has an employees table currently, tracking an employee's name, salary, and position.  

5. Setup + Create Database

You have been provided all of the necessaries files.  Your package.json has all of the necessary middleware dependencies listed.  You have the migration file and the model file.

Create a database named 'payroll_app_development'

Run the seed file.  

6. Write server.js, defining all necessary variables, the root route, and the 5 RESTful routes for employees.  

7. To show that the create, update and destroy routes work, test them in the browser by hitting our server with appropriate AJAX requests.  List the 3 AJAX requests below.  

### CREATE
```javascript
$.ajax({
		method: 'POST',
		url: '/employees',
		data: {name: 'dude', position: 'hanging out', salary: 9}
	})
```
### UPDATE
```javascript
$.ajax({
		method: 'PUT',
		url: '/employees/5',
		data: {salary: 900}
	})
```
### DESTROY
```javascript
$.ajax({
		method: 'DELETE',
		url: '/employees/5'
	})
```


