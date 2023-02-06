class Api::SessionsController < ApplicationController
  def show
    @user = current_user 

     if @user 
        render json: {user: current_user} 
     else 
        render json: { user: nil }
     end
  end

  def create
    credentials = params[:credential]
      password = params[:password]

      @user = User.find_by_credentials(credentials, password)

    puts credentials
    puts "---------"
    puts password
    puts "----------"
    puts @user

      if @user&.save
         login!(@user)
         render json: {user: @user}
      else 
         render json: {errors: ['The provided credentials were invalid'] }, status: :unauthorized
      end 
  end

  def destroy
    logout!
    render json: { message: 'success' }
  end
end
