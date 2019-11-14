class AddNewColsToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :duration, :string
  end
end
