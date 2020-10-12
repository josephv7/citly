class Api::V1::ShortUrlController < ApplicationController

    def create

        short_url = ShortUrl.find_by(short_url_params)

        if short_url.nil?
            render json: {notice: "Not found"}
        else
            render json: short_url
        end

    end


    private

        def short_url_params
            params.permit(:user_id, :url)
        end

end
