class Address < ApplicationRecord
  self.inheritance_column = '_'
  belongs_to :company
end
