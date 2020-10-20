class AddIpAddressToLogs < ActiveRecord::Migration[6.0]
  def change
    add_column :logs, :ip_address, :string
  end
end
