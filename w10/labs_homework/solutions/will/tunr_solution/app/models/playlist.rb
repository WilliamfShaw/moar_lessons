class Playlist < ActiveRecord::Base
	has_and_belongs_to_many :songs

	def add_song(song)
		self.songs.push(song) unless self.songs.include? song
	end

	def remove_song(song)
		self.songs.destroy(song) if self.songs.include? song
	end
end