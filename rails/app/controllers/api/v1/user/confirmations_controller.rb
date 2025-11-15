class Api::V1::User::ConfirmationsController < Api::V1::BaseController
  def update
    user = User.find_by(confirmation_token: params[:confirmation_token])
    return render json: { message: "ユーザーが見つかりません" }, status: :not_found if user.nil?
    return render json: { message: "有効化済みです" }, status: :bad_request if user.confirmed?

    user.update!(confirmed_at: Time.current)

    render json: { message: "正常に有効化ができました" }, status: :ok
  end
end
