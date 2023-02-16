class Api::ReviewsController < ApplicationController
    def index 
       @reviews = Review.all()
    end 

    def create
        @product = Product.find(params[:product_id])
        @review = @product.reviews.create(review_params)
        @review.user = current_user

        if @review.save
          render '/api/products/show'
        else
          render '/api/products/show'
        end
    end
    
    def edit
        @review = current_user.reviews.find(params[:id])
    end
    
    def update
        debugger
        @review = current_user.reviews.find(params[:id])
        debugger
        if @review.update(review_params)
        else
          render :edit
        end
    end
    
    def destroy
        @review = current_user.reviews.find(params[:id])
        @review.destroy
    end
    
    private
    
    def review_params
        params.require(:review).permit(:rating, :comment)
    end
end
