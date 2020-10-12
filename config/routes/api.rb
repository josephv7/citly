namespace :api do
    namespace :v1 do
        resources :short_url, only: [:create, :index]
            post 'short_url' => 'short_url#create'
            get '/:short_url' => 'short_url#find_original_url'
    end
end