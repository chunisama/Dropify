# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer          not null
#  likeable_id   :integer          not null
#  likeable_type :string           not null
#

class Like < ApplicationRecord
  validates :user_id, :likeable_id, :likeable_type, presence: true
  validates :user_id, uniqueness: {:scope => [:likeable_type, :likeable_id]}

  belongs_to :user
  belongs_to :likeable, polymorphic: true

end
