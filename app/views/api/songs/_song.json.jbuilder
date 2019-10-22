json.extract! song, :id, :title, :artist_id, :album_id
json.artist song.artist.name
json.album song.album.name
if song.mp3.attached?
    json.songUrl url_for(song.mp3)
  else
    json.songUrl url_for("")
end