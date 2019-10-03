class AddNewColsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :string, null: false
    add_column :users, :name, :string, null: false
    add_column :users, :gender, :string, null: false
    add_column :users, :birthday, :string, null: false
  end
end
