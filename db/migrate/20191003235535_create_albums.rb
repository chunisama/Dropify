class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.timestamps
      t.string :name, null: false
      t.string :year, null: false
      t.integer :artist_id, null: false
    end
    add_index :albums, :artist_id
  end
end
