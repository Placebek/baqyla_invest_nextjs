class StocksInfo < ApplicationRecord
  belongs_to :country
  has_many :stocks_data, dependent: :destroy
end