class Api::ArtistsController < ApplicationController
    def index
        if artist_ids
            @artists = Artist.where(id: artist_ids)
        elsif search_term
            @artists = Artist.where('lower(title) like ?', "%#{search_term.downcase}%")
        else
            @artists = Artist.all 
            render :index
        end
        # if @artists
        #     render :index
        # else
        #     render json: @artists.errors.full_messages, status: 422
        # end
    end

    def show
        @artist = Artist.find(params[:id])
        if @artist
            render :show
        else
            render json: @artist.errors.full_messages, status: 422
        end
    end

    private
    def artist_ids
        params[:artist_ids]
    end

    def search_term
        params[:search_term]
    end
end