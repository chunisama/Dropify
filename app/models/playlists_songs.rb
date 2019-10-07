# == Schema Information
#
# Table name: playlists_songs
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  playlist_id :integer          not null
#  song_id     :integer          not null
#

class PlaylistsSongs < ApplicationRecord
    validates :playlist_id, uniqueness: {scope: :track_id}
    validates :playlist_id, :track_id, presence: true

    belongs_to :song
    belongs_to :playlist
end
