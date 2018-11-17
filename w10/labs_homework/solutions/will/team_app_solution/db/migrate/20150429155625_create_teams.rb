class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name
      t.string :photo_url
      t.string :hometown
      t.integer :number_of_championships

      t.timestamps
    end
  end
end
