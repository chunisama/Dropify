class CreateGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :genres do |t|
      t.timestamps
      t.string :category, null: false
    end
    add_index :genres, :category, unique: true
  end
end
