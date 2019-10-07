# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string           not null
#  year       :string           not null
#  artist_id  :integer          not null
#

class Album < ApplicationRecord
    validates :name, :year, :artist_id, presence: true
    belongs_to :artist
    has_many :songs
    # active storage association
    has_one_attached :album_cover

end
