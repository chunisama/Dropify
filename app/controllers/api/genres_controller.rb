class Api::GenresController < ApplicationController
    def index
        @genres = Genre.all 
        if @genres
            render :index
        else
            render json: @genres.errors.full_messages, status: 422
        end
    end

    def show
        @genre = Genre.find(params[:id])
        if @genre
            render :show
        else
            render json: @genre.errors.full_messages, status: 422
        end
    end

end