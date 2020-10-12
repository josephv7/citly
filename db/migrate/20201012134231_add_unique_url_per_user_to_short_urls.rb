class AddUniqueUrlPerUserToShortUrls < ActiveRecord::Migration[6.0]
  def change
    add_index :short_urls, [:user_id, :url], :unique => true, :name =>  :index_unique_url_per_user
  end
end
