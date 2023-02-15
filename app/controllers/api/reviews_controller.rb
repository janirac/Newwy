class Api::ReviewsController < ApplicationController
    def index 
       @reviews = Review.all()
    end 

    def create
        debugger
        @product = Product.find(params[:product_id])
        @review = @product.reviews.create(review_params)
        @review.user = current_user

        if @review.save
          render 'api/products/show'
        else
          render 'api/products/show'
        end
    end
    
    def edit
        @review = current_user.reviews.find(params[:id])
    end
    
    def update
        @review = current_user.reviews.find(params[:id])
        if @review.update(review_params)
          redirect_to @review.product
        else
          render :edit
        end
    end
    
    def destroy
        @review = current_user.reviews.find(params[:id])
        @review.destroy
        redirect_to @review.product
    end
    
      private
    
    def review_params
        params.require(:review).permit(:rating, :comment)
    end
end
