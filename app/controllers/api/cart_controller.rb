class Api::CartController < ApplicationController
    before_action :set_cart

    def add_item
        @product = Product.find(params[:product_id])
        @cart_item = @cart.cart_items.find_or_initialize_by(product_id: @product.id)
        @cart_item.save
    end

    def remove_item
        @product = Product.find(params[:product_id])
        @cart_item = @cart.cart_items.find_by(product_id: @product.id)
        @cart_item.destroy
    end

    private

    def set_cart
        @cart = current_user.cart || current_user.create_cart
    end
end
