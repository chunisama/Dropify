# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string           not null
#  user_id    :integer          not null
#

class Playlist < ApplicationRecord
    validates :title, :user_id, presence: true
    #might attach a playlist photo for fixed avatar
    belongs_to :user
    has_many :playlists_songs, dependent: :destroy
    has_many :songs, through: :playlists_songs

    has_many :albums,
    through: :songs,
    source: :album

    has_many :playlist_photos,
    through: :albums,
    source: :photo_attachments

    has_many :follows, as: :followable, dependent: :destroy
    has_many :followers, through: :follows, source: :user

end
