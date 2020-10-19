json.urlList @url_list do |list_item|
    json.id list_item.id
    json.url list_item.url
    json.urlHash list_item.url_hash
    json.redirectionUrl "#{request.host_with_port}/api/v1/#{list_item.url_hash}"
  end