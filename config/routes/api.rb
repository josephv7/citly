namespace :api do
    namespace :v1 do
        resources :log, defaults: {format: :json}
            get 'logs/:id' => 'log#get_logs'
        resources :short_url, only: [:index], defaults: {format: :json}
            post 'short_url' => 'short_url#create'
            get 'url_list' => 'short_url#get_user_urls'
            get '/:short_url' => 'short_url#find_original_url'
          
    end
end