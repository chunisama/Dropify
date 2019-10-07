class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.timestamps
      t.string :title, null: false, unique: true
      t.integer :user_id, null: false
    end
    add_index :playlists, [:title, :user_id], unique: true
  end
end
