class RemoveFriendlyTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :friendly_id_slugs
  end
end
