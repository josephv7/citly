class ShortUrl < ApplicationRecord
  has_many :logs, dependent: :destroy
end
