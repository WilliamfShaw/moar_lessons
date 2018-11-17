# Week 7 Assessment

Please work alone. Please use tools such as the Chrome Console, to test writing your code.

Copy the assessment into your w05/d05 directory.  

Please work in a gist.  

These week's assessment is content-based and will not require you to write any code. 

1. Give an example of a many-to-many relationship between two entities in a database.  How do we track these relationships in a database?

An example of a many-to-many relationship could be phone numbers to people.  A person may have multiple phone numbers (home, work, mobile).  A phone number may be used to contact many people (family members may share a home number; co-workers may share a work number).

These relationships are tracked in our database using a join table, which contains entries of these related-entities containing a person id and a phone number id.  

2. Explain what is meant when a component of an app is described client-side or server-side.

Server-side components are the parts of an app that executed on an app's server computer.  Components like the database and a server routing logic fall in this category. 

Client-side components are the parts of an app that are executed by the client's (user's) computer, specifically in the browser.  Components like stylesheets, script files included in our html (front-end frameworks, jQuery, app.js), and html files fall into this category.  

3. What are the characteristics of a good git flow?  Be sure to discuss topics like feature branches, master, and pull requests.  

A project's master branch should contain the latest stable version of a project's code.  When working on new features, changes should be made on feature branches (usually named with the feature being developed).  After a feature has been written, it should be pushed to Github and then merged to the master branch via a pull request.  Pull requests allow for a new branch to reviewed and then merged to master if their are no conflicts.   

4. Tony and Will are working on a shared code base and tracking the project via Git and Github.  Tony is working on a Backbone View for User Login while Will is working on a Backbone View for User's Comments.  Both make significant changes to the same parts of index.html while working on their views.  Will's work is merged to Master.  What will happen when Tony attempts to merge his work to Master?  

Merge Conflict! Tony's index.html will not feature any of the changes that Will made to index.html AND Github will not be able to automatically resolve the differences between Tony's and Will's.  After pulling, Tony will have to resolve the conflict before attempted to merge again.

5. Explain what the following server route is doing:
`
app.put('/restaurant/:id/add_cuisine_type', function(req, res) {
  var restaurantId = req.params.id;
  var cuisineTypeId = req.body.cuisineType_id;

  Restaurant
    .findOne(restaurantId, { include: [CuisineType] })
    .then(function(restaurant) {
      CuisineType
        .findOne(cuisineType_id)
        .then(function(cuisineType) {
          restaurant
            .addCuisineType(cuisineType)
            .then(function(info) {
              res.send(info);
            });
        });
    });

});
`

This route joins a Restaurant and Cuisine Type based on their respective ids.  First we find the Restaurant based on the id given in the url.  Then we find the Cuisine Type from the id given from the body.  Then we add the Cuisine Type to the Restaurant and send back the resulting join.   

6. You have been contracted to develop a book store inventory app using Backbone.js and Node.js.  You have created a Books Collection in Backbone and standard REST-ful routes for books in Node.  When you call .fetch() on your Books Collection, which of your server routes do you make a request to?  

.fetch() will hit your server's INDEX route, getting all books from the DB.

7. How should user passwords be stored in a database?

Passwords are store in an encrypted manner in our database to preserve the integrity of a passwords security.  

8. During group project, what were some of the technical difficulties you faced, both individually and as a team?

9. During group project, what were some of the non-technical difficulties you faced, both individually and as a team?

10. What were your big takeaways from this experience?
