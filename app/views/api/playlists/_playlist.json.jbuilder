json.extract! playlist, :id, :title, :user_id
json.user_id playlist.user.name
json.songIds playlist.songs.pluck(:id)

