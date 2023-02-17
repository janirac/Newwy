class Api::ProductImagesController < ApplicationController
def show
    @product_image = ProductImage.find(params[:id])
end 
  
def create
    @product_image = ProductImage.new(product_images_params)

    if @product_image.save
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end 
end


private 

def product_images_params

    params.require(:product_image).permit(:image_url)
  end
end
