class Api::CartItemsController < ApplicationController
    def index
        if current_user
            @cart_items = current_user.cart.cart_items
            render 'api/cartItems/index'
        end 
    end

   def create

        @cart = current_user.cart

        @cart_item = current_user.cart.cart_items.new(cart_item_params)
        if @cart_item.save!
            
            render 'api/cartItems/show'
        else
            render json: {errors: ['Could not create cart item']}
        end
   end

   def destroy
    
        @cart_item = CartItem.find_by(id: cart_item_params[:id])
   
        if @cart_item&.delete
            render json: "Successfully deleted the cart item"
        else
            render json: "Failed to delete the cart item"
        end
   end

   private

   def cart_item_params
    debugger
        params.require(:cart_item).permit(:id, :cart_id, :product_id)
   end
end
