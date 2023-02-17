class AddIndexandUniqFavorites < ActiveRecord::Migration[7.0]
  def change
    add_index :favorites, :product_id, unique: true 
    add_index :favorites, :user_id, unique: true
  end
end
