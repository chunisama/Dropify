json.extract! album, :id, :title, :year
json.artist album.artist.name
json.songIds album.songs.pluck(:id)
json.artistId album.artist.id
json.photoUrl url_for(album.album_cover)