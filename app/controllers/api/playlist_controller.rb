class PlaylistContoller < ApplicationController

    def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
            render :show
        else
            render json: @playlist.errors.messages, status: 401
        end
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        @playlist.destroy
        render :show
    end

    def index
        @playlists = Playlist.all
        render :index
    end

    def show
        @playlist = Playlist.find(params[:id])
        if @playlist
            render :show
        else
            render json: @playlists.errors.messages, status: 422
        end
    end

    private
    def playlist_params
        params.require(:playlist).permit(:title, :user_id)
    end
end