class ChangIndex < ActiveRecord::Migration[7.0]
  def change
    remove_index :favorites, :user_id
  end
end
