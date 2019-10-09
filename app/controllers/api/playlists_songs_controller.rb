class Api::PlaylistsSongsController < ApplicationController
    def destroy
        @playlists_songs = PlaylistSongs.find_by(
            playlist_id: params[:playlists_songs][:playlist_id], 
            song_id: params[:playlists_songs][:song_id])
            )
        @playlists_songs.destroy
        render json: {
            playlist_id: @playlists_songs.playlist_id,
            song_id: @playlists_songs.song_id
        }
    end
end
