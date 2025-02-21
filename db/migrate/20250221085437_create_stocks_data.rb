class CreateStocksData < ActiveRecord::Migration[8.0]
  def change
    create_table :stocks_data do |t|
      t.references :stocks_info, null: false, foreign_key: true
      t.float :last_deal
      t.float :change_percent
      t.float :open
      t.float :high
      t.float :low
      t.float :close
      t.integer :volume
      t.datetime :last_time

      t.timestamps
    end
  end
end
