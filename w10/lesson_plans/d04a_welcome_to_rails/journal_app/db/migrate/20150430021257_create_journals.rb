class CreateJournals < ActiveRecord::Migration

  # ALL COMMENTS IN HERE ARE HAROLD COMMENTS

  # Instead of an 'up' and a 'down', we can define a single 'change' method.
  # Rails is smart enough in most cases to know how to 'reverse' the actions
  # of our migration

  def change
    create_table :journals do |t|
      # Specify columns of table in the format
      # t.datatype :column_name
      
      t.string :name

      t.timestamps null: false
    end
  end
end
