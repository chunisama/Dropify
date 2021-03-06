class Api::UsersController < ApplicationController

  #sign up
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :name, :birthday, :gender)
  end
end