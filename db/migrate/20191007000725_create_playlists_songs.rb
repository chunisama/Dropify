class CreatePlaylistsSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists_songs do |t|
      t.timestamps
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false
    end
    add_index :playlists_songs, [:song_id, :playlist_id], unique: true
  end
end
