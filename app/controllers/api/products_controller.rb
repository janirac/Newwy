class Api::ProductsController < ApplicationController
    def index 
        @products = Product.all()
    end 

    def show
        @product = Product.find(params[:id])
    end 

    def create
        @product = Product.new(product_params)

        if product.save!
            render :show
        else
            render json: { errors: @bench.errors.full_messages }, status: 422
        end 
    end 

    private 
    def product_params 
        params.require(:product).permit(:name, :price, :description, :amount, :category, :color, :condition, :brand, :size)
    end 
end
