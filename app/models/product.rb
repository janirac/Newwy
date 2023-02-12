# == Schema Information
#
# Table name: products
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  price          :decimal(, )      not null
#  description    :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  amount         :integer          not null
#  category       :string           not null
#  color          :string           not null
#  condition      :string           not null
#  brand          :string           not null
#  size           :string
#  original_price :decimal(, )
#
require 'product_image.rb'

class Product < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price, :description, :amount, :category, :color, :condition, :brand, presence: true

    has_many :product_images, dependent: :destroy
    has_many :categories, dependent: :destroy

    def last_update 
        @last_update = Product.where('extract(month from updated_at) = ?', Date.today.month)
    end 

    def images(product_id)
        # @product = Product.find(id)
        @images = ProductImage.where(product_id: product_id)
    end 

    def categories(product_id)
        @categories = Category.where(product_id: product_id)
    end 
end
