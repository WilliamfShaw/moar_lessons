# WthrGifBMB(w/MAPS)!!!!

Tonight we are going to build a weather/gif API Playground!

Here is the documentation for the [Open Weather Map API](http://openweathermap.org/api)

Here is the documentation for the [Giphy API](https://github.com/Giphy/GiphyAPI).


#### Step 1 - Hit Open Weather Map API

Fire few test requests to the Open Weather Map API server.  An overview on how to do this can be found [here](http://openweathermap.org/current).

Test a few different API requests.  See what happens when you change the values for the different parameters.  
	* What does the `q` parameter do?
	* What does the `units` parameter do? 
	* What does the `lang` parameter do?

Explore the responses that are sent back and think about how you can use the data therein to make some stuff happen on the browser.

Also, take note of how some requests are responded to and try to plan for ways to overcome these irregularities.  

#### Step 2 - Parse the feed and make an object.

Write a function that takes the API response from Open Weather Map, and turns it into an object with the following construction:

```
{ 
	cityName: city,
	temperature: temperature (in degrees F or C),
	description: one word description of the weather,
	lat: city lattitude,
	lon: city longitude
}
```
#### Step 3 - Display on the DOM

Write another function that takes the object from step 2 and use it to put info to the DOM using jQuery.

This should at first work just by calling the function in the console AND THEN work by taking inputs from buttons/input fields on the DOM.  
 
#### Step 4 - Because GIFS

Using our previous knowledge of the Giphy API, send requests to the Giphy API to include Two Gifs.

One Gif should be a return of a search of the city name.
The other Gif should be a return of a search of the weather description.  

Look into the offset and limit parameters for some ideas about how to get back one gif.  

Please use any and all tricks you picked up from your work today.

### Step 5 - Fun Time

* Add style to your website
	* CSS cursor property
	* CSS :hover/:active property
* Search bars should work even if the user presses the Enter Key. 
* GIFs should be displayed as static images, and should animate only when the mouse moves over them (look at the API Response to see where these images may live).
* Randomize the GIF (twiddle with offset as a parameter OR use the random API endpoint).

### BONUS - Google MAP!

Take a look at the Docs for the [Google Maps Static Map API](https://developers.google.com/maps/documentation/staticmaps/index#MapTypes)

Please write a function that takes the lattitude and longitude from the object we defined in Step 2 and uses it to append a Google Static Map to the page.  



