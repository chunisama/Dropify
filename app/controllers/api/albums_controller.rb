class Api::AlbumsController < ApplicationController
    def index
        if album_ids
            @albums = Album.where(id: album_ids)
        elsif search_term
            @albums = Album.where('lower(name) LIKE ?', "%#{search_term.downcase}%")
        else
            @albums = Album.all 
            render :index
        end
        # if @albums
        #     render :index
        # else
        #     render json: @albums.errors.full_messages, status: 422
        # end
    end

    def show
        @album = Album.find(params[:id])
        if @album
            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end
    end
    private
    def album_ids
        params[:album_ids]
    end

    def search_term
        params[:search_term]
    end
end