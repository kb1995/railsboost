class UsersController < ApplicationController
  before_action :validate_user

  def edit
  end

  def update
    if current_user.update user_params
      redirect_to edit_user_path, notice: "Account updated!"
    else
      flash[:error] = "There was a problem."
      render :edit
    end
  end

  private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :avatar)
    end

    def validate_user
      redirect_to root_path if params[:id] != current_user.hashid
    end
end