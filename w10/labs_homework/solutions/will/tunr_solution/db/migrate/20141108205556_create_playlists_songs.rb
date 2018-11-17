class CreatePlaylistsSongs < ActiveRecord::Migration
  def change
    create_join_table :playlists, :songs
  end
end
