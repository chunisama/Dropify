class PlaylistsSongsController < ApplicationController
    
    def create
        @playlists_songs = PlaylistsSongs.new(playlists_songs_params)
        if PlaylistsSongs.exists?(playlist_id: @playlists_songs.playlist_id, track_id: @playlists_songs.song_id)
            render json: ["Song already exists in your playlist"], status: 401
        else
            @playlists_songs.save!
            render json: ["Song was added to playlist"]
        end
    end

    def destroy
        @playlists_songs = PlaylistsSongs.find(params[:id])
        @playlist = @playlists_songs.playlist
        @playlists_songs.delete
    end

    def playlists_songs_params
        params.require(:playlist).permit(:playlist_id, :song_id)
    end
end
