class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.string :review
      t.references :product, null: false
      t.references :user, null: false, unique: true

      t.timestamps
    end
  end
end
