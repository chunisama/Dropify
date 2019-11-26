class Api::ArtistsController < ApplicationController
    def index
        # if artist_ids
        #     @artists = Artist.where(id: artist_ids)
        # els
        if search_term
            @artists = Artist.where('lower(name) LIKE ?', "%#{search_term.downcase}%")
            render :index
        else
            @artists = Artist.all 
            render :index
        end
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
    # def artist_ids
    #     params[:artist_ids]
    # end

    def search_term
        if params[:props]
            params[:props][:search_term]
        else
            return nil
        end
    end
end