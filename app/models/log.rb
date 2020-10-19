class Log < ApplicationRecord
  belongs_to :user
  belongs_to :short_url
end
