import consumer from "./consumer";

consumer.subscriptions.create("WelcomeChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("hello boys, i connected");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("Disconnected");
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data);
    console.log("recieved data from servar");
  }
});
