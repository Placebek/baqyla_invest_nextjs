Rails.application.routes.draw do
  get '/stocks', to: 'stocks#index'         
  get '/stocks/:id', to: 'stocks#show'      
end