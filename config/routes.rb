Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] 
    resources :favorites, only: [:create, :destroy, :index, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:index, :show, :create] 
    # resources :cart, only: [:create, :update, :destroy]
    resource :cart, only: [:show]
    resources :cart_items, only: [:index, :update, :create, :destroy]
  end

  
  # patch '/api/cart/:id', to: 'carts#add'
  get '*path', to: "static_pages#frontend_index"
end

