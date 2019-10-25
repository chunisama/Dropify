class Api::PlaylistsSongsController < ApplicationController

    def create
        @playlist_songs = PlaylistSongs.new(p_song_params)
        if @playlist_songs.save
            render :show
        else 
        end

    end

    def destroy
        @playlists_songs = PlaylistSongs.find_by(
            playlist_id: params[:playlists_songs][:playlist_id], 
            song_id: params[:playlists_songs][:song_id])
        @playlists_songs.destroy
        render json: {
            playlist_id: @playlists_songs.playlist_id,
            song_id: @playlists_songs.song_id
        }
    end

    private
    def p_song_params
        params.require(:playlist_track).permit(:playlist_id, :song_id)
    end
end
