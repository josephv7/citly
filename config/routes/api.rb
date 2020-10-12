namespace :api do
    namespace :v1 do
        resources :short_url, only: [:create, :index]
            post 'short_url' => 'short_url#create'
    end
end