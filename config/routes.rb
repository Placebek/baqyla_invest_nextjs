Rails.application.routes.draw do
  get '/stocks', to: 'stocks#index'         # Список акций по стране
  get '/stocks/:id', to: 'stocks#show'      # Получение акции по id
end