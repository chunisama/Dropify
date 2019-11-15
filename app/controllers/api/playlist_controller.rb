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
        render json: {
            playlist_id: @playlist.id,
        }
    end

    def index
        # @playlists = Playlist.all
        # render 'api/playlists/index'
        if playlist_ids
            @playlists = Playlist.where(id: playlist_ids)
        elsif search_term
            @playlists = Playlist.where('lower(title) LIKE ?', "%#{search_term.downcase}%")
        else
            @playlists = Playlist.all
            render 'api/playlists/index'
        end
    end

    def show
        @playlist = Playlist.find_by(id: params[:id])
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

    def playlist_ids
        params[:playlist_ids]
    end

    def search_term
        params[:search_term]
    end
end