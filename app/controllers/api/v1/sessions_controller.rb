class Api::V1::SessionsController < Devise::SessionsController
    respond_to :json

    def create
        user = User.find_for_database_authentication(email: login_params[:email])
        if invalid_password?(user)
          respond_with_error "Incorrect email or password", 401
        else
          sign_in(user)
          render json: { user: user, redirect_to: stored_location_for(user) }
        end
      end

      def invalid_password?(user)
        user.blank? || !user.valid_password?(login_params[:password])
      end
  

      def login_params
        params.permit(:email, :password)
      end
end
