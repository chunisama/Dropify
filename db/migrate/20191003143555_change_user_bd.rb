class ChangeUserBd < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :birthday, :date, null: false 
  end
end
