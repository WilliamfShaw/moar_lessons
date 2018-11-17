# Lab 08-02

## Learning Objectives

- Drying up an already existing codebase
- Practice writing Class and Instance Methods

VENÜ 0.0.1 was pretty suite but the new app for the music industry to manage its venues, events, and artists, needs a refactor AND some added functionality.  

> # VENÜ 0.0.2

![VENU](https://c1.staticflickr.com/7/6006/5933582734_cebf29c6d8.jpg)

## Specifications

We have provided you with current working starter code for VENÜ, but feel free to build off of your existing work from last night (if it met completion).  

#### Router Refactor

Move our routes from server.js to independent router files for each entity in VENÜ (venues, events, and artists).

#### Instance Methods

VENÜ 0.0.2 will have the following instance methods:

* Venue
	* `.info()` - returns an informative string with the  venue name, address, and city of a venue.  If there is a booking manager, an additional sentence should be added with this information also.
	
	> eg: `venue.info()` returns `'The Troubadour is located at 9081 Santa Monica Blvd., in West Hollywood.'`
	If a booking manager is listed: `venue.info()` returns `'CBGB is located at 315 Bowery, in New York City. The booking manager is Hilly Kristal.'`

* Event
	* `.category()` - if an event's duration is less than 2 hours, return `'short'`.  Else, return `'long'`.
	* `.isUpcoming()` - check if an event is upcoming.  If an event is in the future, return `true`.  Else (if it is in the past/present), return `'false'`.

Please add the necessary routes to provide proper returns for these instance methods.

#### Class Methods

* Venue
	* `findLargeVenues()` - returns all venues with a capacity > 500.  

* Artist 
	* `.findByGenre(array of strings)` - returns all artists that fit the criteria within the array of strings.
	
	> eg: `Artist.findByGenre(['Rock','EDM'])` should return all artists either Rock or EDM.  
	* Note: Check out the Sequelize Docs for [Complex filtering / OR / NOT queries](http://docs.sequelizejs.com/en/latest/docs/models/).

* Event
	* `.findUpcomingEvents()` - returns all events that are upcoming (based on definition set in isUpcoming()). 
	* Note: Do not try to write this method using the `.isUpcoming()` instance method above.  It will prove difficult to implement due to promises/async issues.  

Please add the necessary routes to provide proper returns for these instance methods.

#### Bonus

Extend functionality of the front-end to include means for a user to:
* View all Venues.
* View all Shows.
* View all Artists.
* View info for a Venue.
* View all Upcoming Shows.
* View all Artists of genre(s) specified by a user.  


## Completeness

| Value | Target |
| ----- | -------|
| 1-3   | Add 1 point for each router successfully created. Existing Routes should still work. |
| 4-6   | Add 1 point for each instance method + respecive route created.|  
| 7-9   | Add 1 point for each class method + respective route created. |
