class Api::V1::Current::UsersController < ApplicationController
  before_action :authenticate_api_v1_user!

  def show
    render json: current_api_v1_user, serializer: CurrentUserSerializer
  end
end
