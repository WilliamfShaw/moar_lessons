# Microblog

![blog image](http://i.stack.imgur.com/QVJoY.png)

A microblog allows users to create, devour, update, and delete miniature blog posts. You will be creating a microblog which allows individual authors to create insightful posts.

## Minimum Viable Product (MVP)

**Models**
- `micropost`
  - title
  - content
  - posting date
  - an author's name (but only one that currently exists)
- `author`
  - name
  - photo
  - blurb

## Views _suggested_

##### Microposts
- micropost collection view
- micropost single view
- micropost new view
- micropost edit view

##### Authors
- author collection view
- author single view
  - should display a list of the author's posts
- author new view
- author edit view

##### Navigation

Model-less view that will serve as the navigation for your site. Should include:

- link to author collection view
- link to micropost collection view
- link to homepage

### User Stories
- As a user, I want to be able to create a new micropost so I can post about my feelings.
- As a user, I want to be able to select an author when creating a micropost, so that there are no anonymous posts
  - When a user is creating a micropost they can choose a pre-existing author from a drop-down menu
  - If there are no authors OR they would like to make a new one, a link should allow them to create a new author
- As a user, I want to be able to view an author's page that contains only the microposts that they have created so that I can keep track of their work
- As a user, I want to be able to view all the microposts that have been created, so that I can browse for one I would like to read.
  - Only the title and author should be displayed
- As a user, I want to be able to view a single micropost so that I can read it.
  - should include all relevant information about the post
  - should have a link to the author's page
- As a user, I want to be able to edit the information for a particular author so I can keep my accounts up-to-date
- As a user, I want to be able to edit/delete a micropost so I can moderate the microblog's content

# Bonus

- Add a Router to your application for maintaining state

- Add a tagging feature to microposts
  - As a user, I want to be able to add a tag to a micropost, so that I can categorize my musings
  - As a user, I want to be able to see all the microposts with a specific tag as a feed, so that I can focus my micropost consumption to my interests
- As a user, I want to be able to write a post that is "sticky" (stays at the top of the feed, or after a previously stuck post) until it is edited to no longer be sticky, so that I can quickly view a suite post
- As a user, I want to view my selected post in a modal, so that I can have a distraction-free reading experience
- As a user, I want to be able to delete a particular author so I can remove them permanently from the microblog
  - Deleting an author should also delete all of their microposts
