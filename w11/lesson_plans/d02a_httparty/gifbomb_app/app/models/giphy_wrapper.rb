class GiphyWrapper

  ROOT_URL = 'http://api.giphy.com/v1/gifs/'
  API_KEY = 'api_key=dc6zaTOxFJmzC'

  def self.search(term)
    term = URI.escape(term)
    response = HTTParty.get(ROOT_URL + 'search?' + API_KEY + '&q=' + term)

    response['data']
  end

  def self.get_random_gif
    response = HTTParty.get(ROOT_URL + 'random?' + API_KEY)

    response['data']
  end

end