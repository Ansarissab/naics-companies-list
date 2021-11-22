class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :avatar_url
      t.string :business_structure
      t.string :duns_number
      t.integer :naics_code

      t.timestamps
    end
  end
end
