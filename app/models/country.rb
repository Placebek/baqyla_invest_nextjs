class Country < ApplicationRecord
  has_many :stocks_infos, dependent: :destroy
end