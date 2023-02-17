class Api::FavoritesController < ApplicationController

def index
    if current_user
        @favorites = current_user.favorites.includes(:product)
        render 'api/favorites/index'
    end
end

def create
    if !@favorite
        @favorite = Favorite.new(favorite_params)
        @favorite.save!
    end 
   
    # if !@favorite.save!
    #     render json: @favorite.errors, status: :unprocessable_entity
    # else
        render :show
end

def show 
    @favorite = Favorite.find(params[:id])
end 

def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
end 

private
    def favorite_params
        params.require(:favorite).permit(:product_id, :user_id)
    end
end
