# G$fb$mb

Tonight we are going to build out a gif-powered, Giphy API-driven, 
playground!

Here is the documentation for the [Giphy API](https://github.com/Giphy/GiphyAPI).

#### Step 1 - Hit Giphy API with $.ajax()

Fire few test requests to the Giphy API server.  An overview on how to do this can be found [here](https://github.com/Giphy/GiphyAPI#search-endpoint).

Test a few different API requests.  See what happens when you change the values for the different parameters.  
	* What does the `q` parameter do?
	* What does the `limit` parameter do? 
	* What does the `offset` parameter do?
	* What does the `rating` parameter do?

And don't forget to use the [public API Key](https://github.com/Giphy/GiphyAPI#overview).

Explore the responses that are sent back and think about how you can use the data therein to make some stuff happen on the browser.

#### Step 2 - Put Response Data on the page.

Start by just appending response data to your page as text content.  Think about how to loop through the Giphy API Response to append text of each result to the page.

Then think about how to make actual images append to your page from the response data.  

#### Step 3 - Add some suite GUI components to the page.

Add buttons to index.html that trigger events that fire off searches into the Giphy API and a search bar to search for any search term.  

Use any terms you like but here is an example of how these buttons may look like.  

* A button saying "Cats", with an id of 'cats'
* A button saying "Dogs", with an id of 'dogs'
* A button saying "Pokemons", with an id of 'pokemons'
* A button saying "Pandas", with an id of 'pandas'

For example, clicking the "Cats" button should make cat gifs appear on the page.  

#### Step 4 - SEARCH!

Add a search field that takes a search query term.  Much like the buttons in step 3, the search field should allow for a user to get search the Giphy API for any term -- not just "Cats", "Dogs", or "Pokemon".  

### Step 5 - Fun Time

* Add style to your website
	* CSS cursor property
	* CSS :hover/:active property
* The search bar should work even if the user presses the Enter Key. 
* GIFs should be displayed as static images, and should animate only when the mouse moves over them (look at the API Response to see where these images may live).
* Add a "Show More" button at the bottom of your search results that will fetch more GIFs matching the search term when clicked.
* Instead of a 'Show More' button, implement an 'Infinity Scroll' of gifs!  That means that when a user reaches the bottom of the page, more gifs are added from a search until all results have been appended to the page. Some tools:
	* jQuery scroll event
	* jQuery .height() method
	* jQuery .scrollTop() method 

