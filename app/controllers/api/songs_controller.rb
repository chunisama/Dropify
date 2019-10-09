class Api::SongsController < ApplicationController

    def index
        @songs = Song.all 
        if @songs
            render :index
        else
            render json: @songs.errors.full_messages, status: 422
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
end