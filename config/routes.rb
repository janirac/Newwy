Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] 
    resources :favorites, only: [:create, :destroy, :index, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:index, :show, :create] do 
      resources :reviews
    end 
    resource :cart, only: [:show]
    resources :cart_items, only: [:index, :update, :create, :destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end

