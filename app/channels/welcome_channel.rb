class WelcomeChannel < ApplicationCable::Channel
  def subscribed
    stream_for "some_channel:1"
  end

  def unsubscribed
    stop_all_streams
    # Any cleanup needed when channel is unsubscribed
  end
end
