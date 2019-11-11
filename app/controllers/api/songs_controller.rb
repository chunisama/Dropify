class Api::SongsController < ApplicationController
    def index
        if song_ids
            @songs = Song.where(id: song_ids)
        elsif search_term
            @songs = Song.where('lower(title) LIKE ?', "%#{search_term.downcase}%")
        else
            @songs = Song.all
            render :index
        end
        # if @songs
        #     render :index
        # else
        #     render json: @songs.errors.full_messages, status: 422
        # end
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
    def song_ids
        params[:song_ids]
    end

    def search_term
        params[:search_term]
    end
end