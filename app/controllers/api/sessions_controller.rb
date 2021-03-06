class Api::SessionsController < ApplicationController
  #login
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid Username or Password'], status: 401
    end
  end

  #logout
  def destroy
    if current_user  
      logout!
      render json: {}
    else 
      # render json: [message: 'no user logged in!'], status: 404
      render json:  ['No current user signed in!'], status: 404
    end
  end
end