# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Team.create({
  name: "Mets",
  hometown: "New York", 
  photo_url: "http://www.colormake.com/wp-content/uploads/2014/03/mets-logo.png",
  number_of_championships: 2
})

Team.create({
  name: "Yankees",
  hometown: "New York", 
  photo_url: "http://www.namedevelopment.com/blog/yankees11.png",
  number_of_championships: 27
})

Team.create({
  name: "Rangers",
  hometown: "New York", 
  photo_url: "http://www.msg.com/content/dam/msg/game/team_logos/4966-lg.png",
  number_of_championships: 4
})

Team.create({
  name: "Nets",
  hometown: "Brooklyn", 
  photo_url: "http://images.vectorhq.com/images/previews/85f/brooklyn-nets-logo-psd-433522.png",
  number_of_championships: 2
})

