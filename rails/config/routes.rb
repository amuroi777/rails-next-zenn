Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?

  namespace :api do
    namespace :v1 do
      get "health_check", to: "health_check#index"
      mount_devise_token_auth_for "User", at: "auth"

      namespace :current do
        resource :user, only: [:show]
        resources :articles, only: [:index, :show, :create, :update]
      end
      # 認証不要、公開記事のみ
      resources :articles, only: [:index, :show]
    end
  end
end
