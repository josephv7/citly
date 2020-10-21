class Api::V1::LogController < Api::V1::BaseController
    def show
        @logs = Log.where(short_url_id: params[:id]).reverse_order
        # render json: { notice: "Data Fetched Successfully", data: logs}, status: :ok
    end

end
