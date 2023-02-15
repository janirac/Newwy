class Api::CartsController < ApplicationController
    def show
        if current_user
            @cart = current_user.cart
            render 'api/carts/show'
        end
    end
  end
  