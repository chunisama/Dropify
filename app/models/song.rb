# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string           not null
#  artist_id  :integer          not null
#  album_id   :integer          not null
#

class Song < ApplicationRecord
    validates :title, presence: true
    belongs_to :artist
    belongs_to :album
    # active storage association
    has_one_attached :mp3
    
end
