class CompaniesController < ApplicationController
  before_action :authenticate_user!

  def index
    scope = Company
    scope = scope.where('name LIKE ?', "%#{filter_params[:name]}%") if filter_params[:name].present?
    scope = scope.order(name: filter_params[:sort]) if filter_params[:sort].present?
    scope = scope.includes(:addresses)
    render json: scope.to_json(include: :addresses)
  end

  private

  def filter_params
    params.permit(
      :name,
      :sort
    )
  end
end
