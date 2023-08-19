const remoteVideo = document.getElementById("remoteVideo");
const viewerPeer = new Peer(); // Generate a unique ID for the viewer

viewerPeer.on("open", () => {
  console.log("Viewer peer ID:", viewerPeer.id);
  // const broadcasterPeerID = prompt("Enter the broadcaster's peer ID:");
  initiateBroadcastConnection("uttesh-customer");
});

function initiateBroadcastConnection(broadcasterPeerID) {
  const call = viewerPeer.call(broadcasterPeerID, null);
  if (call) {
    call.on("stream", (remoteStream) => {
      remoteVideo.srcObject = remoteStream;
    });

    // Handle errors
    call.on("error", (error) => {
      console.error("Call error:", error);
    });
  }
}
