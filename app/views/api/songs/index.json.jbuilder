json.array! @songs do |song|
    json.extract! song, :id, :title, :artist_id, :album_id
    json.songUrl url_for(song.mp3)
end