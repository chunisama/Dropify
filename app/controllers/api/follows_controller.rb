class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render 'api/follows/show'
    else
      render json: ["Could not process request"], status: 401
    end
  end

  def destroy
    @follow = Follow.find_by(user_id: follow_params[:user_id], followable_id: follow_params[:followable_id], followable_type: follow_params[:followable_type])
    if @follow
      copy_follow = @follow.dup
      @follow.destroy
      render json: copy_follow
    else
      render json: ["Could not process request"], status: 401
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:user_id, :followable_id, :followable_type)
  end
end