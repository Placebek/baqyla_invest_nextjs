Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://192.168.197.31:3000','http://localhost:3000'
     # Укажите порт, на котором работает ваш фронтенд
    resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
  end
end