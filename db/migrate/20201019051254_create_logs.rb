class CreateLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :logs do |t|
      t.references :user, null: false, foreign_key: true
      t.references :short_url, null: false, foreign_key: true

      t.timestamps
    end
  end
end
