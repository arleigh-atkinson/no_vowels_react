class CreateCapitalCountries < ActiveRecord::Migration[5.0]
  def change
    create_table :capital_countries do |t|
      t.string :name

      t.timestamps
    end
  end
end
