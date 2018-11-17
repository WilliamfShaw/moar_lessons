class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.string :year
      t.string :genre
      t.string :plot
      t.string :imdbRating
      t.string :imdbID
    end
  end
end
