class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.timestamps
      t.integer :user_id, null: false
      t.integer :followable_id, null: false
      t.string :followable_type, null: false
    end
    add_index :follows, :followable_id
    add_index :follows, :user_id
  end
end
