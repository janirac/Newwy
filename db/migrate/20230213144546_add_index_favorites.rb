class AddIndexFavorites < ActiveRecord::Migration[7.0]
  def change
    remove_index :favorites, :product_id
    remove_index :favorites, :user_id
  end
end
