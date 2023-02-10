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
class Product < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price, :description, :amount, :category, :color, :condition, :brand, presence: true

    def last_update 
        @last_update = Product.where('extract(month from updated_at) = ?', Date.today.month)
    end 
end
