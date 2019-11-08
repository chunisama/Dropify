class Api::PlaylistsSongsController < ApplicationController

    def create
        @playlists_song = PlaylistsSong.new(p_song_params)
        if @playlists_song.save
            render 'api/playlists_songs/show'
        else
            render json: ["Could not process request"], status: 401
        end

    end

    def destroy
        @playlists_song = PlaylistsSong.find_by(
            playlist_id: params[:playlists_song][:playlist_id], 
            song_id: params[:playlists_song][:song_id])
        @playlists_song.destroy
        render json: {
            playlist_id: @playlists_song.playlist_id,
            song_id: @playlists_song.song_id
        }
    end

    private
    def p_song_params
        params.require(:playlists_songs).permit(:playlist_id, :song_id)
    end
end
