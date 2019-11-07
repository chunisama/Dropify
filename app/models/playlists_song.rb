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

class PlaylistsSong < ApplicationRecord
    validates :song_id, uniqueness: {scope: :playlist_id}
    validates :playlist_id, :song_id, presence: true

    belongs_to :song
    belongs_to :playlist
end
