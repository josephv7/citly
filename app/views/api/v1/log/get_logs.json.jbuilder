json.logList @logs do |list_item|
  json.timeStamp list_item.created_at
end