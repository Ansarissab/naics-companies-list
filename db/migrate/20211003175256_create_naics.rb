class CreateNaics < ActiveRecord::Migration[6.1]
  def change
    create_table :naics do |t|
      t.text :description
      t.string :title
      t.integer :code

      t.timestamps
    end
  end
end
