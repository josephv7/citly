class Api::V1::LogController < Api::V1::BaseController
    def get_logs
        logs = Log.where(short_url_id: log_params[:id])
        render json: { notice: "Data Fetched Successfully", data: logs}, status: :ok
    end

    private
    def log_params
        params.permit(:id)
    end
end
