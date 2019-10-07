json.extract! song, :id, :title, :artist_id, :album_id
json.artist song.artist.name
json.songUrl url_for(song.mp3)