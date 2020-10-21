class AddPlatformToLogs < ActiveRecord::Migration[6.0]
  def change
    add_column :logs, :platform_name, :string
  end
end
