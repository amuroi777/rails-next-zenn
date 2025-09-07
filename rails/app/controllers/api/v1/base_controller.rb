class Api::V1::BaseController < ApplicationController
  alias_method :current_user, :current_api_vi_user
  alias_method :authenticate_user!, :authenticate__api_vi_user!
  alias_method :user_signed_in?, :api_vi_user_signed_in?
end
