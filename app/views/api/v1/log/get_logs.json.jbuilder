json.logList @logs do |list_item|
  json.timeStamp list_item.created_at
  json.ipAddress list_item.ip_address
end