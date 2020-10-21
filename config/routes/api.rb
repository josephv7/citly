namespace :api do
    namespace :v1 do
        resources :log, only: [:show], defaults: {format: :json}
        resources :short_url, only: [:create, :index], defaults: {format: :json}
            get 'short_url/:url_hash' => 'short_url#show'
          
    end
end
