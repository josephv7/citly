json.urlList @url_list do |list_item|
    json.url list_item.url
    json.urlHash list_item.url_hash
  end