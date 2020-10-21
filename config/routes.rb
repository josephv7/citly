Rails.application.routes.draw do
  def draw(routes_name)
    instance_eval(File.read(Rails.root.join("config/routes/#{routes_name}.rb")))
  end

  draw :devise
  draw :api
  root "home#index"
  get '/s/:short_url', to: redirect('/api/v1/short_url/%{short_url}')
  get '*path', to: 'home#index', via: :all
end
