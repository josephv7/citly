class Api::V1::ShortUrlController < Api::V1::BaseController

    before_action :generate_short_url, only: [:create]
    skip_before_action :authenticate_user_using_token, only: [:find_original_url]

    def create
        @url_entry = ShortUrl.new(short_url_params.merge(url_hash: @short_url, user_id: current_user.id))
        
        unless @url_entry.save
            respond_with_model_error @short_url
          end
          render json: { notice: "Data Inserted", data: @url_entry }, status: :ok
    end

    
    def find_original_url
        short_url = ShortUrl.where(url_hash: params[:short_url]).first
        Log.create(short_url_id: short_url[:id],user_id: short_url[:user_id], ip_address: request.remote_ip)
        redirect_to short_url[:url]
    end

    def index
        @url_list = ShortUrl.select('short_urls.*, count(logs.id) as logs_count').where(user_id: current_user.id).left_joins(:logs).group('short_urls.id')
    end


    private

        def generate_short_url
            loop do
                @short_url = SecureRandom.alphanumeric(6)
                break @short_url unless ShortUrl.where(url_hash: @short_url).first
            end
        end

        def short_url_params
            params.permit(:url)
        end

end
