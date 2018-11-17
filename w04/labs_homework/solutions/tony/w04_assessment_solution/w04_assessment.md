# Week 4 Assessment SOLUTION

## NOTE: some of the code questions have multiple answers.  These are one set of answers.  

Please work alone. Please use tools such as the Chrome Console, to test writing your code.

Please work in a gist.  

I have one excess q in part one.  We can kill one.  

The first 3 questions will test you ability to recall and explain core concepts from the week with your own words. Please answer them in the this markdown itself. Each question should be answered within a few sentences.    

The next 4 questions are short code-related questions.  You may answer them in a js gist.  

The last 3 will test you ability to use an Web - API to request and parse data, and affect change to the DOM.  

## Concepts

1) What is AJAX and how do we use AJAX in our apps?

<!-- Answer here -->
AJAX is a Javascript library we can use to make requests to a server in order to perform CRUD operations.  We can use AJAX to effect client-side (browser) changes in our apps using backend (server) data.  

2) What is an API?  Explain how we have used API's in the past week.

<!-- Answer here -->

API's are the means by which we interact with various applications (the questions we can ask it, the responses to be expected, etc.).  This week we began using API's that allow us to request data from a server based on the parameters we ask of it.  

3) What are the 4 layers of the internet and what is the purpose of each? 

* Link layer - the physical connections that allow us to access the internet (hardware).  

* Internet layer - the protocols/specs that organize the endpoints that make up the internet (ip addresses).  

* Transport layer - the protocols/specs that organize how we traverse these endpoints (TCP/UDP)

* Application layer - the protocols/specs that organize the layer that our applications/us ourselves actually interact with the internet (HTTP/FTP).

<!-- Answer here -->

4) AJAX Requests occur asynchronously.  What does that mean generally?  How must we consider this fact as we develop applications that use AJAX? 

This means that our requests are sent but our script keeps running even as we wait for a response to be received.  This means that our apps may keep running smoothly BUT must consider that the data we desire may not be received by the time our next scripts have been executed.   

## Short Code Questions

5) Given the following code: 

```js
alert(1);
$(document).ready(function(){
  alert(2);
  $('#cast-spell').on("click", function(event){
    alert(3);
    $.ajax({
      url: "/wizards",
      dataType: "json"
    }).done(function(data){
      alert(4);
    });
    alert(5);
  });
  alert(6);
});
alert(7);
```

In what order will these alerts occur?  Assume that a user visits the page and then clicks on the `#cast-spells` button.  

1 and then 7.  Then 2 followed by 6.  Then the button is clicked; 3 fires, then 5.  When the response returns from the ajax call, 4 fires.  

Given the following JSON response from an API:

```javascript
var response = {
	message: "accurate",
	cod: "200",
	count: 1,
	list: [
		{
			id: 1796236,
			name: "WDI-McClane",
			students_num: 27,
			city: 'NYC'
			instructors: [
				{
					name: 'McKenneth Scott III',
					age: 9001
				},
				{
					name: 'Hari Mohanraj',
					age: 50
				}
			],
			jr_instructors: [
				{
					name: 'Tony DeFreitas',
					age: 17
				},
				{
					name: 'Will Shaw',
					age: 8
				}
			],
			ta: [
				{
					name: Matt Smith,
					age: 'null'
				},
			],
			producer: [
				{
					name: 'Sarah Maibach',
					age: NaN
				}
			]
		}
	]
}

```

Given that we have saved this response to a variable, called response...

6) How can we access the name of the producer?

`response.list[0].producer[0].name`

7) How can we create an array with the names and ages of all instructors (not junior instructors)?
```
response.list[0].instructors.map(function(instructor) {
	var instructorObj = {
		name: instructor.name,
		age: instructor.age
	}
	return instructorObj
})
```

8) Create an object containing the following properties:
	
	* Course Name
	* Number of Students
	* Course City
	* Instructors - an array of all instructors with their names and ages.
	* Jr. Instructors - an array of all jr. instructors with their names and ages.
	* TA - an array of all teaching assistants with their names and ages.
	* Producer - an array with all producers with their names and ages. 
```
var responseData = response.list[0]
var courseName = responseData.name;
var numStudents = responseData.students_num;
var courseCity = responseData.city;
var instructors = responseData.instructors.map(function(instructor) {
	var instructorObj = {
		name: instructor.name,
		age: instructor.age
	}
	return instructorObj
});
var jrInstructors = responseData.jr_instructors.map(function(jrInstructor) {
	var jrInstructorObj = {
		name: jrInstructor.name,
		age: jrInstructor.age
	}
	return jrInstructorObj
});
var ta = responseData.ta.map(function(ta) {
	var taObj = {
		name: ta.name,
		age: ta.age
	}
	return taObj
});
var producers = responseData.producers.map(function(producer) {
	var producerObj = {
		name: producer.name,
		age: producer.age
	}
	return producerObj
});

var courseObj = {
	course: courseName,
	number_of_students: numStudents,
	city: courseCity,
	instructorsArr: instructors,
	jrInstructorsArr: jrInstructors,
	taArray: ta,
	producerArray: producers
};

```

## Practice

Please find the necessary starter index.html, style.css, and app.js in your starter file.  

9) In step 9, please write a function that grabs the contents of the search input field and passes it to our `getWeather` function.

10) In step 10, please write `getWeather`.  `getWeather` sends an AJAX request to Open Weather Map API, and calls renderWeather in it's done function.  Please use weatherURL as the url for the AJAX call.  

11) In step 11, please grab the city name, the temperature, and the weather description and save those in an object with the properties, `city`, `temperature`, and `description`.  Then pass this into the appropriate template and append it to the `#results` div.  
