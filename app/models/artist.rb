# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string           not null
#  bio        :text             not null
#  genre_id   :integer          not null
#

class Artist < ApplicationRecord
    validates :name, :bio, presence: true
    belongs_to :genre
    has_many :songs
    has_many :albums

end
