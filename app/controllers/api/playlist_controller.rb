class PlaylistContoller < ApplicationController

    def create
        @playlist = Playlist.new(playlist_params)
        @playlist.user_id = current_user.id

        if @playlist.save
            @user = @User.find(@playlist.user_id)
            render :show
        else
            render json: @playlist.errors.messages, status: 401
        end
    end

    def destroy
        @playlist = current_user.playlists.find(params[:id])
        @playlist.destroy
        render json: @playlist
    end

    def index
        @playlists = current_user.playlists
        if @playlists
            render :index
        else
            render json: @playlists.errors.messages, status: 422
        end
    end

    def show
        @playlist = Playlist.find(params[:id])
        if @playlist
            render :show
        else
            render json: @playlists.errors.messages, status: 422
        end
    end

    def update
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