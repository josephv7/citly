json.logList @logs do |list_item|
  json.timeStamp list_item.created_at
  json.ipAddress list_item.ip_address
  json.platformName list_item.platform_name
end