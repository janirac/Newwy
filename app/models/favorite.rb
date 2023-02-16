# == Schema Information
#
# Table name: favorites
#
#  id         :bigint           not null, primary key
#  product_id :bigint           not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Favorite < ApplicationRecord
    validates :user_id, uniqueness: { scope: :product_id }
    belongs_to :user
    belongs_to :product
end
