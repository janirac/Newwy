# == Schema Information
#
# Table name: product_images
#
#  id         :bigint           not null, primary key
#  image_url  :string           not null
#  product_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ProductImage < ApplicationRecord
    # belongs_to :product
end
