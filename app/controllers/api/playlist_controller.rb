class Api::PlaylistController < ApplicationController

    def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
            render 'api/playlists/show'
        else
            render json: @playlist.errors.messages, status: 401
        end
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        @playlist.destroy
        render 'api/playlists/index'
    end

    def index
        @playlists = Playlist.all
        render 'api/playlists/index'
    end

    def show
        @playlist = Playlist.find(params[:id])
        if @playlist
            render 'api/playlists/show'
        else
            render json: @playlists.errors.messages, status: 422
        end
    end

    private
    def playlist_params
        params.require(:playlist).permit(:title, :user_id)
    end
end