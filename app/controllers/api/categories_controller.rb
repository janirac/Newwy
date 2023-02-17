class Api::CategoriesController < ApplicationController
    def show
        @category = Category.find(params[:id])
    end 
      
    def create
        @category = Category.new(category_params)
    
        if @category.save
          render :show
        else
          render json: { errors: @user.errors.full_messages }, status: 422
        end 
    end
    
    
    private 
    
    def category_params
    
        params.require(:category).permit(:category_ids)
      end
    end
    