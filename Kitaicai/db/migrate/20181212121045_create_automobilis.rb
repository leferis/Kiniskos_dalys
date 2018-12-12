class CreateAutomobilis < ActiveRecord::Migration[5.1]
  def change
    create_table :automobilis do |t|

      t.timestamps
    end
  end
end
