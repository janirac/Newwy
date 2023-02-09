class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.decimal :price, null: false
      t.string :description, null: false

      t.timestamps
    end

    add_index :products, :name, unique: true
    add_index :products, :price
  end
end
