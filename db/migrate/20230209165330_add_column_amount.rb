class AddColumnAmount < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :amount, :integer, null: false
  end
end
