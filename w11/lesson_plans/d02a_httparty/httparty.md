# HTTParty

## What is HTTParty?

> a gem that is used to make HTTP requests from within a Ruby application

## How do we use it?

If it is not already installed globally on your machine then type the command
  ```
  gem install httparty
  ```

Once it is installed you can use it by requiring it within your program like you would any other gem.
  ```
  require 'httparty'
  ```

To get a better idea of how to use this tool test it out in `pry`!

```
require 'httparty'

example_response = HTTParty.get('http://example.com')

```

To utilize the functions of the library we must use the HTTParty module.

> A module is a wrapper that allows us to easily create a namespace for bits of shared functionality.
  HTTParty is a module that wraps a handful of methods for performing HTTP requests like get and post

By calling the `.get` method we are going to perform a default HTTP GET request to the URL that is provided.
If you look at what is returned from the request we can see the string of HTML that is returned when making a request to `http://example.com`.

#### But wait...there's more!

If we dive a little bit deeper into the object returned by making the request we can get a lot of useful information.

Run the following commands and note the information that is returned:

1. `example_response.class`
1. `example_response.headers`
1. `example_response.code`
1. `example_response.message`
1. `example_response.content_type`
1. `example_response.request`

For requests for regular HTML the content type will usually be `text/html`.

### Let's go deeper

Make a new request to the OMDB API.

```
omdb = HTTParty.get('http://www.omdbapi.com/?t=batman')
omdb.class
omdb.headers # make note of the "access-control-allow-origin" property
omdb.content_type
```

HTTParty has some tricks up its sleeves. The content-type for the response to OMDB was `application/json`.
If HTTParty gets a response with the content-type set to `application/json` it will automatically parse the response for JSON.
Most of the APIs and external services that we use will respond with `application/json`, but not all of them are that friendly.

```
itunes_api = HTTParty.get('https://itunes.apple.com/lookup?id=909253')
itunes_api.content_type
parsed_response = JSON.parse( itunes_api )
```

If you encounter this issue, all that you need to do is parse the response string into JSON.
The `JSON` library is included by default when you require the httparty gem into your application.

### Example

Here is an example of using HTTParty within a ruby application to make requests to an API.
This is the server that was used to give our class access to the iTunes api.
The server is written using an alternate, lightweight web framework [Sinatra](http://www.sinatrarb.com/).

[iTunes Wrapper API example](https://github.com/DrRobotmck/itunes_wrapper)

Clone the repository **OUTSIDE OF OUR CLASS REPO**, `bundle install`, and run the command `rackup`.
This will start the server on `localhost:9292`.
Look at the code in the config.ru file and try to make sense of what is going on. Jot down questions.

Here is another example of using HTTParty within a ruby application:

[Githubalyzer - module](https://github.com/DrRobotmck/githubalyzer/blob/master/modules/github_module.rb)

This is a module that I built to wrap my requests to the Github API. It makes use of more than just the `.get` method provided by HTTParty.
