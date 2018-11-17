class Weather

  BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q='

  def self.for_city(city)
    data = HTTParty.get(BASE_URL + URI.encode(city))
    {
      temp: k_to_f(data["main"]["temp"]),
      weather: data["weather"][0]["main"]
    }
  end

  def self.k_to_c(temp)
    temp.to_i - 273
  end

  def self.c_to_f(temp)
    temp.to_i * 9 / 5 + 32
  end

  def self.k_to_f(temp)
    c_to_f(k_to_c(temp))
  end
end
