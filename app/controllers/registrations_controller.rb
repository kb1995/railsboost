class RegistrationsController < Devise::RegistrationsController
  
  def edit
    super
    
  end

  def update
    current_user.avatar.attach(params[:user][:avatar])
    super
  end
end 