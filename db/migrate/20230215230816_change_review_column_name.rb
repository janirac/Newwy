class ChangeReviewColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :reviews, :review, :comment
  end

end
