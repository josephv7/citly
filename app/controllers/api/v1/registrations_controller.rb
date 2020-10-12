class Api::V1::RegistrationsController < Devise::RegistrationsController
    respond_to :json

    def create
        build_resource(sign_up_params)
        resource.save

        if resource.persisted?
            render json: { user: resource, notice: "Account Created Successfully!" }
            # Should redirect to the sign in route
        else
            render json: { errors: resource.errors }, status: :unprocessable_entity
        end
    end

    

    
    def sign_up_params
        params.permit(:email, :password, :password_confirmation)
    end


end
