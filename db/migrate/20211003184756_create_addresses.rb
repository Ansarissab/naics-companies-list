class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.string :type
      t.string :street_address
      t.string :city
      t.string :state
      t.string :postal_code
      t.references :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end
