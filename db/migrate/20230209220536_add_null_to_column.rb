class AddNullToColumn < ActiveRecord::Migration[7.0]
  def change
    change_column_null :products, :category, false
    change_column_null :products, :color, false
    change_column_null :products, :condition, false
    change_column_null :products, :brand, false
  end
end
