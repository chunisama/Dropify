json.extract! @playlist, :id, :title, :song_ids
json.user @playlist.user, :id, :username