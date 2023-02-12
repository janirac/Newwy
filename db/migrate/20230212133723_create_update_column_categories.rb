class CreateUpdateColumnCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :update_column_categories do |t|
      add_column :categories, :category_ids, :integer, array: true, default: '{}'
      remove_column :categories, :category

      t.timestamps
    end
  end
end
