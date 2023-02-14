class Api::FavoritesController < ApplicationController

def index
    # @favorites = Favorite.all()

    # @favorites = Favorite::llFavoritesForUser(current_user.id)
    # @favorites = []
    # debugger
    if current_user
        @favorites = Favorite.where(user_id: current_user.id)
    end
    # @favorites = User.favorite_products
    render json: @favorites
    # api/favorites/index'
end

def create
    @favorite = Favorite.new(favorite_params)
   
    if !@favorite.save
        render json: @favorite.errors, status: :unprocessable_entity
    end 

    render :show

end

def destroy
    @favorite = current_user.favorites.find(params[:id])
    @favorite.destroy
    
end 

private
    def favorite_params
        params.require(:favorite).permit(:product_id)
    end
end
