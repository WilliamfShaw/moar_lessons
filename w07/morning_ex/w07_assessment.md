# Week 7 Assessment

Please work alone. Please use tools such as the Chrome Console, to test writing your code.

Copy the assessment into your w07/d05 directory.  

Please work in a gist.  

This week's assessment is content-based and will not require you to write any code. 

1. Give an example of a many-to-many relationship between two entities in a database.  How do we track these relationships in a database?

2. Explain what is meant when a component of an app is described as client-side or server-side.

3. What are the characteristics of a good git flow?  Be sure to discuss topics like feature branches, master, and pull requests.  

4. What is a merge conflict and how is one resolved?  

5. Explain what the following server route is doing:
```javascript
app.put('/restaurant/:id/add_cuisine_type', function(req, res) {
  var restaurantId = req.params.id;
  var cuisineTypeId = req.body.cuisine_type_id;

  Restaurant
    .findOne(restaurantId, { include: [CuisineType] })
    .then(function(restaurant) {
      CuisineType
        .findOne(cuisineTypeId)
        .then(function(cuisineType) {
          restaurant
            .addCuisineType(cuisineType)
            .then(function(info) {
              res.send(info);
            });
        });
    });

});
```
&nbsp;6. How should user passwords be stored in a database?

7a. You have been contracted to develop a book store inventory app using Backbone.js and Node.js.  You have created a Books Collection in Backbone and standard REST-ful routes for books in Node.  When you call .fetch() on your Books Collection, which of your server routes do you make a request to?  

7b. Regarding the same app, when you call .create() on you Books Collection, which of your server routes do you make a request to?


###### You will not be assessed on the following questions

&nbsp;8. During group project, what were some of the technical difficulties you faced, both individually and as a team?

&nbsp;9. During group project, what were some of the non-technical difficulties you faced, both individually and as a team?

&nbsp;10. What were your big takeaways from this experience?
