# == Schema Information
#
# Table name: follows
#
#  id              :bigint           not null, primary key
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  user_id         :integer          not null
#  followable_id   :integer          not null
#  followable_type :string           not null
#

class Follow < ApplicationRecord
  validates :user_id, :followable_id, :followable_type, presence: true
  validates :user_id, uniqueness: {:scope => [:followable_type, :followable_id]}

  belongs_to :user
  belongs_to :followable, polymorphic: true

end
