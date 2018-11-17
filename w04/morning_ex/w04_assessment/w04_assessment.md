# Week 4 Assessment

Please work alone. Please use tools such as the Chrome Console, to test writing your code.

Copy the assessment into your w04/d05 directory.  

Please work in a gist.  

The first 4 questions will test you ability to recall and explain core concepts from the week with your own words. Please answer them in the this markdown itself. Each question should be answered within a few sentences.    

The next 4 questions are short code-related questions.  You may answer them in a js gist.  

The last 3 will test you ability to use an Web - API to request and parse data, and affect change to the DOM.  Please submit your full app.js file within a gist (copy and paste it).

## Concepts

1) What is AJAX and how do we use AJAX in our apps?

<!-- Answer here below -->
2) What is an API?  Explain how we have used API's in the past week.

<!-- Answer below -->

3) What are the 4 layers of the internet and what is the purpose of each? 

<!-- Answer here below -->

4) AJAX Requests occur asynchronously.  What does that mean generally?  How must we consider this fact as we develop applications that use AJAX?  

<!-- Answer here below -->

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

In what order will these alerts occur?  Assume that a user visits the page and then clicks the `#cast-spell` button.  

(Questions 6-8) Given the following JSON response from an API:

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
      city: 'NYC',
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
          name: 'Matt Smith',
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

7) How can we create an array with the names and ages of all instructors (not junior instructors)?

8) Create an object containing the following properties:
	
	* Course Name
	* Number of Students
	* Course City
	* Instructors - an array of all instructors with their names and ages.
	* Jr. Instructors - an array of all jr. instructors with their names and ages.
	* TA - an array of all teaching assistants with their names and ages.
	* Producer - an array with all producers with their names and ages.  

## Practice

Please find the necessary starter index.html, style.css, and app.js in your starter file.  

9) In step 9, please write a function that grabs the contents of the search input field and passes it to our `getWeather` function.  The function should be triggered by a click event on the button associated with the search input field.  

10) In step 10, please write `getWeather`.  `getWeather` sends an AJAX request to Open Weather Map API, and calls renderWeather in it's done function.  Please use weatherURL as the url for the AJAX call.  

11) In step 11, please grab the city name, the temperature, and the weather description and save those in an object with the properties, `city`, `temperature`, and `description`.  Then pass this into the appropriate template and append it to the `#results` div.  
