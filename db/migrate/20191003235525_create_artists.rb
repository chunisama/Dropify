class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.timestamps
      t.string :name, null: false
      t.text :bio, null: false
      t.integer :genre_id, null: false
    end
    add_index :artists, :genre_id
  end
end
