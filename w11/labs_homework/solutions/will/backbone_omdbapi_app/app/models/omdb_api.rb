class OmdbApi
  def self.search(query)
    raw_response = HTTParty.get("http://www.omdbapi.com/?s=#{URI.escape(query)}")
    movies = raw_response["Search"] || []
    movies.map {|movie| self.movie(movie["imdbID"])}
  end

  def self.movie(id)
    raw_response = HTTParty.get("http://www.omdbapi.com/?i=#{URI.escape(id)}")
    raw_response["Poster"] = 'http://placekitten.com/300/500' if raw_response["Poster"] == 'N/A'
    Movie.new(
      title: raw_response["Title"] || 'Unknown',
      year: raw_response["Year"] || 'Unknown',
      genre: raw_response["Genre"] || 'Unknown',
      plot: raw_response["Plot"] || 'Unknown',
      poster_url: raw_response["Poster"] || '',
      imdbRating: raw_response["imdbRating"] || 'Unknown',
      imdbID: raw_response["imdbID"] || 'Unknown'
    )
  end
end
