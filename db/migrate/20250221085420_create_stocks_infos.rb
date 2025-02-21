class CreateStocksInfos < ActiveRecord::Migration[8.0]
  def change
    create_table :stocks_infos do |t|
      t.string :name
      t.string :description
      t.references :country, null: false, foreign_key: true

      t.timestamps
    end
  end
end
