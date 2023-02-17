class RemoveCategoryColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :category
  end
end
