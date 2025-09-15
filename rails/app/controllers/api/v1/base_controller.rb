class Api::V1::BaseController < ApplicationController
  # DeviseTokenAuthのメソッドを直接使用
  # current_userは既にDeviseTokenAuthで定義されている
  # 認証が必要な場合はbefore_actionでauthenticate_user!を使用
end
