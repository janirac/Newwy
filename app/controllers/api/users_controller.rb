class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new(user_params)

    if @user.save
      
      @cart = Cart.create!(user_id: @user.id)
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end 
  end

  def favorited_product(product)
    params.require(:user).permit(:product_id)
    @user = User.new()
    User.favorited_product(product_id)
  end

  private

  def user_params

    params.require(:user).permit(:email, :password)
  end
end
