# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  price       :decimal(, )      not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  amount      :integer          not null
#
class Product < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price, presence: true
end
