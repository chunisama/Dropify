# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  category   :string           not null
#

class Genre < ApplicationRecord
    validates :category, presence: true
    has_many :artists
end
