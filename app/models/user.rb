# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password

  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  before_validation :ensure_session_token

  def self.find_by_credentials(credential, password)
    if URI::MailTo::EMAIL_REGEXP.match?(credential)
      user = User.find_by(email: credential)
    # else
    #   user = User.find_by(username: credential) for future implementation
    end 

    if user&.authenticate(password)
      return user
    else
      nil
    end 
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  private

    def generate_unique_session_token
      while true
        token = SecureRandom::urlsafe_base64
        return token unless User.exists?(session_token: token)
      end 
    end

end
