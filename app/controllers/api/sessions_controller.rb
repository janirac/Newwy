class Api::SessionsController < ApplicationController

  def show
    @user = current_user 

     if @user 
        render 'api/users/show'
     else 
        render json: { user: nil }
     end
  end

  def create
    credentials = params[:credential]
    password = params[:password]

    @user = User.find_by_credentials(credentials, password)

      if @user
         login!(@user)
         render 'api/users/show'
      else 
         if User.find_by(email: params[:credential])
            render json: {errors: ["Password was incorrect"]}, status: :unauthorized
         else
            render json: {errors: [" We couldn't find an account associated with this email address"] }, status: :unauthorized
         end 
      end 
  end

  def destroy
    logout!
    render json: { message: 'success' }
  end
end
