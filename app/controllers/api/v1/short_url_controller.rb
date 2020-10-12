class Api::V1::ShortUrlController < Api::V1::BaseController

    before_action :generate_short_url, only: [:create]

    def create
        @url_entry = ShortUrl.new(short_url_params.merge(url_hash: @short_url))
        
        unless @url_entry.save
            respond_with_model_error @short_url
          end
          render json: { notice: "Data Inserted", data: @url_entry }, status: :ok
    end

    def find_original_url
        short_url = ShortUrl.where(url_hash: params[:short_url]).first
        redirect_to short_url[:url]
    end


    private

        def generate_short_url
            loop do
                @short_url = SecureRandom.alphanumeric(6)
                break @short_url unless ShortUrl.where(url_hash: @short_url).first
            end
        end

        def short_url_params
            params.permit(:user_id, :url)
        end
end
