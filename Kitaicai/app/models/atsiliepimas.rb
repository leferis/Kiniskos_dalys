class Atsiliepimas < ApplicationRecord
    validates :ID, presence: true
    validates :teigiamas, presence: true
end
