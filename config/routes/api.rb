namespace :api do
    namespace :v1 do
        resources :log, only: [:show], defaults: {format: :json}
        resources :short_url, only: [:create, :index], defaults: {format: :json}
            # get '/:short_url' => 'short_url#find_original_url'
          
    end
end
