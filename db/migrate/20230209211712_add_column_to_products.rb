class AddColumnToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :category, :string
    add_column :products, :color, :string
    add_column :products, :condition, :string
    add_column :products, :brand, :string
    add_column :products, :size, :string
    add_column :products, :original_price, :decimal

  end
end
