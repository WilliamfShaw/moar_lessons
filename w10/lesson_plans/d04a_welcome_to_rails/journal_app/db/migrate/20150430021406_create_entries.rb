class CreateEntries < ActiveRecord::Migration

  # ALL COMMENTS IN HERE ARE HAROLD COMMENTS

  # Instead of an 'up' and a 'down', we can define a single 'change' method.
  # Rails is smart enough in most cases to know how to 'reverse' the actions
  # of our migration

  def change
    create_table :entries do |t|
      # Specify columns of table in the format
      # t.datatype :column_name
      
      t.text :content
      t.references :journal, index: true

      t.timestamps null: false
    end
    add_foreign_key :entries, :journals
  end
end
