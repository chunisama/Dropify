class Api::SongsController < ApplicationController
    def index
        # if song_ids
        #     @songs = Song.where(id: song_ids)
        # els
        if search_term
            @songs = Song.where('lower(title) LIKE ?', "%#{search_term.downcase}%")
            render :index
        else
            @songs = Song.all
            render :index
        end
    end

    def show
        @song = Song.find(params[:id])
        if @song
            render :show
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    private
    # def song_ids
    #     params[:song_ids]
    # end

    def search_term
        if params[:props]
            params[:props][:search_term]
        else
            return nil
        end
    end
end