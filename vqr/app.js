const localVideo = document.getElementById("localVideo");
const broadcasterPeer = new Peer("uttesh-customer"); // Generate a unique ID for the broadcaster

broadcasterPeer.on("open", () => {
  console.log("Broadcaster peer ID:", broadcasterPeer.id);
  startBroadcast();
});

function startBroadcast() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((localStream) => {
      localVideo.srcObject = localStream;
      broadcasterPeer.on("call", (call) => {
        console.log("..startBroadcast...");
        call.answer(localStream);
      });

      broadcasterPeer.on("call", (call) => {
        navigator.mediaDevices.getUserMedia(
          { video: true, audio: true },
          (stream) => {
            console.log("..startBroadcast.11111..");
            call.answer(stream); // Answer the call with an A/V stream.
            call.on("stream", (remoteStream) => {
              // Show stream in some <video> element.
            });
          },
          (err) => {
            console.error("Failed to get local stream", err);
          }
        );
      });
    })
    .catch((error) => {
      console.error("Error accessing local media:", error);
    });
}
